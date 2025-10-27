# Figma Assignment - React Application

This is a React application created based on a Figma design.

## Getting Started

### Installation

```bash
npm install
```

### Running Locally

For development:
```bash
npm run start:dev
```

For production build:
```bash
npm run build
npm start
```

## Deploying to Render

### Prerequisites
- A GitHub account
- A Render account

### Steps to Deploy

1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click "New +" and select "Static Site"
4. Connect your GitHub repository
5. Configure:
   - **Name**: figma-assignment
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
6. Click "Create Static Site"
7. Your site will be live at a URL like `https://your-app.onrender.com`

## Features

- Dark-themed UI with profile and gallery sections
- Interactive navigation tabs (About Me, Experiences, Recommended)
- Question mark icon triggers blink animation
- Gallery with add image functionality
- Hover effects on images
- Responsive design for laptop screens (768px+)

## Project Structure

```
src/
  - App.js        # Main application component
  - App.css       # Application styles
  - index.js      # Entry point
  - index.css     # Global styles
```

