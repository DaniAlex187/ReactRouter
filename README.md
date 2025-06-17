
//Project Structure & Routing Notes
1. Routing with React Router
I use React Router v6 for client-side routing.
The main routing logic is in App.tsx.
I import Routes, Route, and useLocation from react-router-dom.
The Routes component defines the available routes:
/ renders the Home page.
/about renders the About page.
/contact renders the Contact page.
I use useLocation() to get the current location, which is useful for animations and route transitions.
2. Page Transitions
I use framer-motion's AnimatePresence to animate route transitions.
The AnimatePresence component wraps the Routes and uses the current location as a key, enabling smooth page transitions when navigating.
3. Navbar Component
The Navbar component is imported and rendered at the top level in App.tsx.
This ensures the navigation bar is always visible, regardless of the current route.
The actual navigation links and styling are handled in Navbar.tsx (not shown here, but typically includes links to /, /about, and /contact).
4. Component Organization
Pages are organized in a pages folder (Home.tsx, About.tsx, Contact.tsx).
Reusable components like the navbar are in a components folder.
This separation keeps the codebase modular and maintainable.
5. File: App.tsx
Imports all required dependencies and components.
Handles the main layout: always shows the navbar, and below it, the routed page content.
Uses React functional component syntax with TypeScript (React.FC).

Summary:
I use React Router for navigation, with each route rendering a separate page component. The navbar is always visible, and I enhance user experience with animated transitions using Framer Motion. The project is organized for clarity and scalability, separating pages and reusable components.

I make changes to navbar button: hoover, shadow etc and add the code in Navbar.css

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  padding: 0.5rem 2rem;
}

.navbar-title {
  color: #fff;
  font-weight: bold;
  font-size: 1.3rem;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
}

.nav-btn {
  color: #fff;
  background: #3b82f6;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: 
    background 0.3s cubic-bezier(.4,0,.2,1),
    transform 0.2s cubic-bezier(.4,0,.2,1),
    box-shadow 0.2s cubic-bezier(.4,0,.2,1);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin-left: 0.5rem;
}

.nav-btn:hover {
  background: #2563eb;
  transform: translateY(-3px) scale(1.07);
  box-shadow: 0 6px 20px rgba(59,130,246,0.2);
}

Also the Navbar.tsx will look like this

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-title">MyPage</div>
    <div className="navbar-links">
      <Link to="/" className="nav-btn">Home</Link>
      <Link to="/about" className="nav-btn">About Us</Link>
      <Link to="/contact" className="nav-btn">Contact</Link>
    </div>
  </nav>
);

export default Navbar   