// Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} Byantes Galus | All Rights Reserved
      </p>
      <div>
        <a
          href="www.linkedin.com/in/byantesTsar21"
          className="mx-2 text-white hover:text-gray-200"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ByantesS21/Portfolio"
          className="mx-2 text-white hover:text-gray-200"
        >
          GitHub
        </a>
        <a
          href="mailto:byantessavage@gmail.com"
          className="mx-2 text-white hover:text-gray-200"
        >
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
