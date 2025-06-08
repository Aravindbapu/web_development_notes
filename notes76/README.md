# Notes76 - React Router: Routing in React

This directory contains an example of implementing routing in React using React Router.

## What is React Router?
React Router is a library for managing navigation and routing in React applications. It allows you to define routes and navigate between different components based on the URL.

### Key Features:
- Declarative routing using components.
- Nested routes for hierarchical navigation.
- Dynamic routing with URL parameters.
- Programmatic navigation.

## Example Overview
In this example, the application includes the following routes:

### Routes:
- **/** - Home page
- **/about** - About page
  - **/about/team** - Team page (nested route)
  - **/about/company** - Company page (nested route)
- **/contact** - Contact page

### Code Highlights:
1. **Router Setup:**
   ```jsx
   import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
   ```

2. **Navigation Links:**
   ```jsx
   <nav>
       <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
           <li><Link to="/contact">Contact</Link></li>
       </ul>
   </nav>
   ```

3. **Route Definitions:**
   ```jsx
   <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />}>
           <Route path="team" element={<Team />} />
           <Route path="company" element={<Company />} />
       </Route>
       <Route path="/contact" element={<Contact />} />
   </Routes>
   ```

## How to Run
1. Install dependencies:
   ```bash
   npm install react-router-dom
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the application in your browser at `http://localhost:3000`.

## Additional Notes
- **Nested Routes:** React Router allows you to define routes inside other routes for hierarchical navigation.
- **Dynamic Routing:** You can use URL parameters to create dynamic routes.
- **Programmatic Navigation:** Use hooks like `useNavigate` for navigation in response to events.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Resources
- [React Router Documentation](https://reactrouter.com/)
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)

Feel free to expand this example with more routes and features as you learn React Router!
