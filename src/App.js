import React from 'react';

import { HomePage } from './pages/HomePage';
import { OldProjectsPage } from './pages/OldProjectsPage';
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
      path: "/oldprojects",
      element: <OldProjectsPage />
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

