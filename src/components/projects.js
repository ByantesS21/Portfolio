function Projects() {
  return (
    <div id="projects" className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="border p-4 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-semibold text-gray-800">
            Portfolio project
          </h2>
          <p className="text-gray-600">
            My first major project in the form of a react web app.HEHE😅
          </p>
          <a
            href="https://github.com/ByantesS21/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline transition duration-300 ease-in-out transform hover:scale-105"
          >
            View on GitHub
          </a>
        </div>
        {/* Add more project cards */}
      </div>
    </div>
  );
}

export default Projects;
