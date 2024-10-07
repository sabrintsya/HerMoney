import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App  from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import 'animate.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
    <App />
    </BrowserRouter>
  </StrictMode>,
);
