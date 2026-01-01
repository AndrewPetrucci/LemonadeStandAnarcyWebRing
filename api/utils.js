const { google } = require('googleapis');

/**
 * Fetches the webring sites from Google Sheets
 * Expected sheet format: Column A contains URLs of webring sites
 */
async function getWebringData() {
  try {
    // Check if API key is configured
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;
    
    if (!apiKey || !sheetId) {
      console.error('Missing required environment variables');
      return null;
    }

    const sheets = google.sheets({ version: 'v4', auth: apiKey });
    
    // Read data from the sheet (assuming data is in column A, starting from row 2)
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: 'Sheet1!A2:A', // Adjust range as needed
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return [];
    }

    // Extract URLs from the rows
    return rows.map(row => row[0]).filter(url => url && url.trim() !== '');
  } catch (error) {
    console.error('Error fetching webring data:', error);
    return null;
  }
}

/**
 * Gets the current site's position in the webring
 */
function getCurrentIndex(sites, referer) {
  if (!referer) return -1;
  
  // Try to find the current site in the list
  const currentIndex = sites.findIndex(site => {
    try {
      const siteUrl = new URL(site);
      const refererUrl = new URL(referer);
      return siteUrl.hostname === refererUrl.hostname;
    } catch {
      return false;
    }
  });
  
  return currentIndex;
}

module.exports = { getWebringData, getCurrentIndex };
