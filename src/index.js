import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Download,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/download" element={<Download />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
