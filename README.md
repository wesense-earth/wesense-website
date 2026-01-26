# WeSense Website

The official website for WeSense - a decentralised environmental data commons.

## Tech Stack

- React 19
- Vite 7
- Bootstrap 5
- React Bootstrap

## Development

### First Time Setup

```bash
# Install dependencies
npm install
```

### Run Development Server

```bash
# Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173` (or the next available port).

**Note:** Opening `index.html` directly in a browser won't work - you must use the Vite dev server.

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Lint Code

```bash
npm run lint
```

## Project Structure

```
wesense-website/
├── src/
│   ├── components/    # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Mission.jsx
│   │   ├── Why.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Audience.jsx
│   │   ├── Vision.jsx
│   │   ├── Roadmap.jsx
│   │   ├── Contribute.jsx
│   │   └── Footer.jsx
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   ├── App.css
│   └── index.css
├── public/            # Static assets
├── index.html         # HTML template
└── package.json
```

## Content Updates

The website content is stored in individual component files. To update:

- **Hero/tagline**: `src/components/Hero.jsx`
- **Mission statement**: `src/components/Mission.jsx`
- **How it works**: `src/components/HowItWorks.jsx`
- **Roadmap**: `src/components/Roadmap.jsx`
- **Call to action**: `src/components/Contribute.jsx`

## Deployment

### Hostinger (or any cPanel/Apache hosting)

1. **Build the site locally**:
   
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder contents** to your web root (usually `public_html/`):
   
   - Via FTP (FileZilla, etc.)
   - Via Hostinger File Manager
   - Via git deployment

3. **The `.htaccess` file** in `public/` will automatically be included in the build to handle:
   
   - SPA routing (redirects all routes to index.html)
   - Gzip compression
   - Cache headers for performance

4. **Done!** Visit your domain to see the site.

### Other Hosting Options

The site can also be deployed to:

- **Netlify** - Automatic builds from GitHub, free SSL
- **Vercel** - Automatic builds from GitHub, free SSL
- **GitHub Pages** - Free hosting for public repos
- **Cloudflare Pages** - Automatic builds, global CDN
- **Any static hosting service** - Just upload the `dist/` folder

After running `npm run build`, deploy the `dist/` folder contents.
