# LemonadeStandAnarcyWebRing

A decentralized webring for lemonade stand enthusiasts, DIY culture advocates, and small business supporters!

## Features

- **Static HTML Page**: Beautiful, self-contained HTML page that can be hosted on GitHub Pages
- **Serverless API**: Dynamic webring navigation powered by Google Sheets
- **Three Navigation Endpoints**:
  - `/api/previous` - Navigate to the previous site in the ring
  - `/api/random` - Jump to a random site in the ring
  - `/api/next` - Navigate to the next site in the ring

## Quick Start

### For Hosting the WebRing Page

1. Enable GitHub Pages in your repository settings
2. Your page will be available at: `https://yourusername.github.io/LemonadeStandAnarcyWebRing/`

### For Setting Up the API

See [API_README.md](./API_README.md) for detailed instructions on:
- Setting up Google Sheets integration
- Deploying the API to Vercel
- Configuring environment variables
- Local development

## Project Structure

```
.
├── index.html          # Main webring page
├── api/                # Serverless API functions
│   ├── previous.js     # Previous site endpoint
│   ├── random.js       # Random site endpoint
│   ├── next.js         # Next site endpoint
│   └── utils.js        # Shared utility functions
├── package.json        # Node.js dependencies
├── vercel.json         # Vercel deployment configuration
├── .env.example        # Environment variable template
├── API_README.md       # Detailed API documentation
└── README.md           # This file
```

## Contributing

To add your lemonade stand to the webring, please add your site URL to the Google Sheet (see API_README.md for details).

## License

This project celebrates the anarchic spirit of independent lemonade stands everywhere! 🍋