# Lemonade Stand Anarchy WebRing

A retro webring celebrating independent lemonade stands, DIY culture, and decentralized web communities. This project combines a backend API for webring navigation with a frontend web experience featuring neon signs, character overlays, and a YouTube playlist.

## 🍋 Features

- **Webring Navigation API** - Navigate through member sites with Previous/Random/Next endpoints
- **YouTube Playlist Integration** - Embedded playlist with neon sign overlay
- **Character Display** - Featured character images (Atrioc, Aiden, Doug) with GitHub fallback URLs
- **Neon Sign Effects** - Animated CSS neon signs with flickering effects
- **Wood Texture Styling** - Retro-themed footer and header backgrounds
- **Responsive Design** - Works across different screen sizes
- **Static Hosting Ready** - Deployable to GitHub Pages

## 📂 Project Structure

```
LemonadeStandAnarcyWebRing/
├── index.js                 # Express API server
├── index.html              # Main frontend page
├── package.json            # Node.js dependencies
├── .env.example           # Environment variables template
├── pictures/              # Image assets
│   ├── _Aiden.png        # Character image
│   ├── _Atrioc.png       # Character image
│   ├── _Doug.png         # Character image
│   ├── Wood.jpg          # Footer/header background
│   └── lemons.jpg        # Body background texture
└── Procfile               # Deployment configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 14+
- Git

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AndrewPetrucci/LemonadeStandAnarcyWebRing.git
   cd LemonadeStandAnarcyWebRing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the API server:**
   ```bash
   npm start
   ```

5. **View the website:**
   Open `http://localhost:3000` in your browser

## 🔧 How It Works

### Frontend (`index.html`)

- **Header**: Wood-textured background with animated title
- **Character Section**: Three featured images with raw.githubusercontent.com fallback URLs
- **Main Content**: Welcome message and information about the webring
- **YouTube Section**: Embedded playlist with animated neon "Latest Episode" and "Watch Now" signs
- **Navigation**: Webring navigation buttons (Previous/Random/Next/GitHub)
- **Footer**: Wood-textured background with navigation and links
- **Background**: Tiled lemon texture rotated 45 degrees with gradient overlay

## 🎨 Styling Features

### Neon Signs
CSS-based neon text effects with flickering animation:
- Green glow text-shadow
- Black background with green border
- Rounded corners
- Box-shadow glow effects
- Flicker animation at 1.5s intervals

### Background Textures
- **Body**: Rotated 45° lemon pattern with yellow gradient
- **Footer/Header**: Wood texture with cover sizing
- **Overall**: Retro aesthetic with layered textures

## 📝 Customization

### Change Colors
- **Neon color**: Edit `#00ff00` in `.neon-sign` CSS
- **Button colors**: Edit `#FF6B6B` in `.webring-link` CSS
- **Text colors**: Edit color values in individual classes

### Update Character Images
Replace URLs in the `character-images` div with your own images.

### Modify Neon Signs
The neon signs are positioned using `position: absolute` within a relative container. Adjust:
- `top`, `left` values for positioning
- `transform` for rotation/scaling
- `font-size` for text size

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Select the branch to deploy (usually `main`)
4. Site will be available at `https://username.github.io/LemonadeStandAnarcyWebRing/`

## 🔗 API Deployment
Api is under development at https://github.com/AndrewPetrucci/LemonadeStandAnarcyWebRingApi

## 🤝 Contributing

To make your own page:
1. Fork the project!
2. Get your hands dirty and break stuff (vibe coding makes leaning the most accessible its ever been!)
3. Add your project to the webring (TODO: I'm still setting up the server and redirect system and process for adding to the webring to work with github pages!)

## 📄 License

MIT License - Feel free to use and modify!

## 🍋 Credits

Built for the Lemonade Stand Anarchy community - celebrating independent creators and decentralized web culture.