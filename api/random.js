const { getWebringData } = require('./utils');

/**
 * API endpoint for navigating to a random site in the webring
 */
module.exports = async (req, res) => {
  try {
    // Get the list of sites from Google Sheets
    const sites = await getWebringData();
    
    if (!sites || sites.length === 0) {
      return res.status(503).json({ 
        error: 'Webring data unavailable',
        message: 'Please configure Google Sheets API key and Sheet ID'
      });
    }

    // Get the referer to avoid redirecting to the same site
    const referer = req.headers.referer || req.headers.referrer;
    
    let randomUrl;
    if (sites.length === 1) {
      // If there's only one site, use it
      randomUrl = sites[0];
    } else {
      // Filter out the current site and pick a random one from the rest
      let availableSites = sites;
      
      if (referer) {
        availableSites = sites.filter(site => {
          try {
            const siteUrl = new URL(site);
            const refererUrl = new URL(referer);
            return siteUrl.hostname !== refererUrl.hostname;
          } catch {
            return true;
          }
        });
      }
      
      // If filtering removed all sites, use all sites
      if (availableSites.length === 0) {
        availableSites = sites;
      }
      
      // Pick a random site
      const randomIndex = Math.floor(Math.random() * availableSites.length);
      randomUrl = availableSites[randomIndex];
    }
    
    // Redirect to the random site
    res.writeHead(302, { Location: randomUrl });
    res.end();
  } catch (error) {
    console.error('Error in random endpoint:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
};
