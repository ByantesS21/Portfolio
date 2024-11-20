import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      className={`p-8 flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white fade-in ${
        show ? "show" : ""
      }`}
    >
      <h1 className="text-4xl sm:text-6xl font-bold">
        Hello, I'm Byantes Galus
      </h1>
      <p className="mt-4 text-lg sm:text-2xl">A passionate Web Developer</p>
      <p className="mt-2 text-sm sm:text-lg max-w-md text-center">
        Welcome to my portfolio! Discover my projects, skills, and experience
        below.
      </p>
      <div className="mt-8 flex space-x-4">
        {/* Use Link instead of a for navigation */}
        <Link
          to="/about"
          className="px-4 py-2 bg-white text-blue-700 font-semibold rounded shadow-md hover:bg-gray-200 transition"
        >
          About Me
        </Link>
        <Link
          to="/projects"
          className="px-4 py-2 bg-white text-blue-700 font-semibold rounded shadow-md hover:bg-gray-200 transition"
        >
          Projects
        </Link>
      </div>
    </div>
  );
}

export default Home;
