# Notes65 - Express.js Routing Example

This directory demonstrates basic routing in Express.js including static file serving, URL parameters, and query parameters.

## Setup

1. Install dependencies:
```powershell
npm install express
npm install nodemon --save-dev
```

2. Initialize npm (if you haven't already):
```powershell
npm init -y
```

3. Run the server:
```powershell
# Using Node.js
node main.js

# Using Nodemon (recommended for development)
nodemon main.js
```

## Nodemon

Nodemon is a utility that monitors for changes in your source code and automatically restarts your server.

### Setting up Nodemon

1. Install as a dev dependency:
```powershell
npm install nodemon --save-dev
```

2. Add script to package.json:
```json
{
  "scripts": {
    "dev": "nodemon main.js"
  }
}
```

3. Run with:
```powershell
npm run dev
```

### Benefits of Nodemon
- Automatically restarts when files change
- No need to manually restart server
- Improves development workflow

## Available Routes

- **/** - Home route
  - Returns: "Hello Bapu"
  
- **/about** - About page
  - Returns: "About us"
  
- **/contact** - Contact page
  - Returns: "Hello contact me"
  
- **/blog** - Blog main page
  - Returns: "Hello Blog"
  
- **/blog/:slug** - Individual blog posts
  - Demonstrates URL parameters
  - Logs both URL parameters and query parameters

## Static Files

The app serves static files from the 'public' directory using:
```javascript
app.use(express.static('public'))
```

## URL Parameters and Query Strings

The blog route demonstrates how to handle:
- URL parameters (e.g., /blog/post-1)
- Query strings (e.g., /blog/post-1?author=bapu)

## Running the Application

1. Make sure Node.js is installed
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. Run in development mode: `npm run dev`
5. Open `http://localhost:3000` in your browser

## Testing Routes

Use these URLs to test different routes:
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/contact
- http://localhost:3000/blog
- http://localhost:3000/blog/my-first-post?author=bapu
