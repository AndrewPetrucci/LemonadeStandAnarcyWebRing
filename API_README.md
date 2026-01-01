# WebRing API Documentation

This project includes a serverless API for managing the Lemonade Stand Anarchy WebRing navigation. The API integrates with Google Sheets to dynamically manage the list of webring sites.

## Architecture

- **Frontend**: Static HTML page (index.html) hosted on GitHub Pages
- **Backend**: Serverless API functions deployed on Vercel
- **Data Source**: Google Sheets (stores list of webring member URLs)

## API Endpoints

### GET /api/previous
Redirects to the previous site in the webring based on the referrer.

**Response**: HTTP 302 redirect to the previous site URL

### GET /api/random
Redirects to a random site in the webring (excluding the current site if possible).

**Response**: HTTP 302 redirect to a random site URL

### GET /api/next
Redirects to the next site in the webring based on the referrer.

**Response**: HTTP 302 redirect to the next site URL

## Google Sheets Setup

1. **Create a Google Sheet** with the following structure:
   - Column A: Site URLs (one per row)
   - Row 1: Header (e.g., "Site URL")
   - Rows 2+: Member site URLs

   Example:
   ```
   | Site URL                                    |
   |---------------------------------------------|
   | https://example1.github.io/lemonade-stand  |
   | https://example2.github.io/my-stand        |
   | https://example3.github.io/lemonade        |
   ```

2. **Make the sheet publicly readable**:
   - Click "Share" in the top right
   - Change "Restricted" to "Anyone with the link"
   - Set permission to "Viewer"

3. **Get your Sheet ID**:
   - Copy it from the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`

4. **Create a Google Cloud Project & Enable Sheets API**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable the Google Sheets API
   - Create credentials (API Key)
   - Restrict the API key to only Google Sheets API

## Deployment

### Deploy to Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Connect to Vercel**:
   - Push this repository to GitHub
   - Go to [Vercel](https://vercel.com/)
   - Import your GitHub repository
   - Vercel will auto-detect the configuration

3. **Set Environment Variables** in Vercel:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add:
     - `GOOGLE_SHEETS_API_KEY`: Your Google Sheets API key
     - `GOOGLE_SHEET_ID`: Your Google Sheet ID

4. **Deploy**:
   - Vercel will automatically deploy on every push to main/master
   - Your API will be available at: `https://your-project.vercel.app/api/*`

### Update index.html

If your API is deployed to a custom domain, update the links in `index.html`:

```html
<a href="https://your-api-domain.vercel.app/api/previous">← Previous Stand</a>
<a href="https://your-api-domain.vercel.app/api/random">Random Stand</a>
<a href="https://your-api-domain.vercel.app/api/next">Next Stand →</a>
```

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create a `.env` file** (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

3. **Fill in your environment variables** in `.env`:
   ```
   GOOGLE_SHEETS_API_KEY=your_actual_api_key
   GOOGLE_SHEET_ID=your_actual_sheet_id
   ```

4. **Run locally with Vercel CLI**:
   ```bash
   vercel dev
   ```

5. **Test the endpoints**:
   - http://localhost:3000/api/previous
   - http://localhost:3000/api/random
   - http://localhost:3000/api/next

## How It Works

1. **Navigation Request**: User clicks on a webring navigation button
2. **API Call**: Request is sent to the appropriate API endpoint (`/api/previous`, `/api/random`, or `/api/next`)
3. **Fetch Data**: API fetches the current list of webring members from Google Sheets
4. **Determine Target**: Based on the HTTP referrer and the requested direction, the API determines the target site
5. **Redirect**: API returns an HTTP 302 redirect to the target site

## Adding Your Site to the WebRing

To add your site to the webring:

1. Add your site URL to the Google Sheet (Column A)
2. Copy the webring navigation HTML from `index.html` to your site
3. Update the API endpoint URLs to point to the deployed API

## Troubleshooting

- **503 Error**: Check that environment variables are set correctly
- **Empty redirects**: Verify Google Sheet is publicly readable and contains URLs
- **Wrong site**: Check that URLs in the sheet are complete and valid
- **Circular loops**: Ensure the referrer detection is working correctly

## Security Notes

- The Google Sheets API key is restricted to read-only access
- No user data is collected or stored
- All redirects are to URLs defined in the Google Sheet
