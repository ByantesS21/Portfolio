function About() {
  return (
    <div id="about" className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
      <p className="text-lg text-gray-700">
        I’m a Softare Engineer with a background in Full Stack development. My
        passion lies in creating interactive and accessible web applications
        using modern frameworks like React.
      </p>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>JavaScript</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>C++</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
