import React from 'react';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
// import { ContactPage } from './pages/ContactPage';

import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";

export default function App() {

    const element = useRoutes([
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about",
        element: (
          <AboutPage/>
        )
      }
    ]);

    const location = useLocation();

    if (!element) return null;

    return (
      <AnimatePresence mode="wait">
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    );
}

