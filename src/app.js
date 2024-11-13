import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contacts";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white p-4">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-gray-200">
                Projects
              </a>
            </li>
            <li>
              <a href="/contacts" className="hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
