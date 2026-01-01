const { getWebringData, getCurrentIndex } = require('./utils');

/**
 * API endpoint for navigating to the previous site in the webring
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
    
    let previousIndex;
    if (currentIndex === -1) {
      // If current site not found, redirect to the last site
      previousIndex = sites.length - 1;
    } else if (currentIndex === 0) {
      // If at the first site, wrap around to the last site
      previousIndex = sites.length - 1;
    } else {
      // Otherwise, go to the previous site
      previousIndex = currentIndex - 1;
    }

    const previousUrl = sites[previousIndex];
    
    // Redirect to the previous site
    res.writeHead(302, { Location: previousUrl });
    res.end();
  } catch (error) {
    console.error('Error in previous endpoint:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
};
