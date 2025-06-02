# Notes66

This directory is intended for experimenting with Node.js and Express.js server code, similar to previous notes. You can use this folder to practice creating new routes, handling different HTTP methods (GET, POST, PUT, DELETE), and testing server-side JavaScript features.

## How to Use

1. **Initialize npm (if not already done):**
   ```powershell
   npm init -y
   ```

2. **Install Express (if needed):**
   ```powershell
   npm install express
   ```

3. **Create your server file:**
   - Example: `main.js`

4. **Run your server:**
   ```powershell
   node main.js
   ```
   Or, for automatic restarts on file changes (if nodemon is installed):
   ```powershell
   npx nodemon main.js
   ```

## Example Express.js Route

```js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Notes66!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

## Tips
- Use `app.get`, `app.post`, `app.put`, and `app.delete` to handle different HTTP methods.
- Test your routes using tools like Postman, curl, or your browser.
- Organize your code and add comments for clarity.

Feel free to expand this folder with more files and experiments as you learn!
