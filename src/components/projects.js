function Projects() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <div className="space-y-4">
        <div className="border p-4 rounded-lg">
          <h2 className="text-2xl font-semibold">Project Title 1</h2>
          <p className="text-lg">A brief description of the project.</p>
          <a
            href="https://github.com/your-profile/project1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View on GitHub
          </a>
        </div>
        {/* Add more project entries as needed */}
      </div>
    </div>
  );
}

export default Projects;
