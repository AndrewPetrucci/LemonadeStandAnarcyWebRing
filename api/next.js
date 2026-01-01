const { getWebringData, getCurrentIndex } = require('./utils');

/**
 * API endpoint for navigating to the next site in the webring
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

    // Get the referer to determine current position
    const referer = req.headers.referer || req.headers.referrer;
    const currentIndex = getCurrentIndex(sites, referer);
    
    let nextIndex;
    if (currentIndex === -1) {
      // If current site not found, redirect to the first site
      nextIndex = 0;
    } else if (currentIndex === sites.length - 1) {
      // If at the last site, wrap around to the first site
      nextIndex = 0;
    } else {
      // Otherwise, go to the next site
      nextIndex = currentIndex + 1;
    }

    const nextUrl = sites[nextIndex];
    
    // Redirect to the next site
    res.writeHead(302, { Location: nextUrl });
    res.end();
  } catch (error) {
    console.error('Error in next endpoint:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
};
