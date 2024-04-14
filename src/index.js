import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';

import App from './App';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
      <BrowserRouter>
        <div className="main-content">
          <NavBar />
            <div className="page">
              <App />
            </div>
          <Footer />
        </div>
      </BrowserRouter>
  </StrictMode>
);
