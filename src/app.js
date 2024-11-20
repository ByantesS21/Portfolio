import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contacts";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/footer";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-blue-600 text-white p-4">
          <ul className="flex space-x-4">
            {/* Replace <a> with <Link> for SPA navigation */}
            <li>
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-200">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
