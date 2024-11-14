// Projects.js
function Projects() {
  return (
    <div
      id="projects"
      className="p-8 bg-gray-200 text-gray-800 min-h-screen flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-blue-700 mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">My Portfolio</h3>
          <p className="text-gray-600 mb-4">
            This project demonstrates my skills in frameworks such as react.
          </p>
          <a
            href="https://github.com/ByantesS21/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View on GitHub
          </a>
        </div>
        {/* Add more project cards here */}
      </div>
    </div>
  );
}

export default Projects;
