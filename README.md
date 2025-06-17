
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