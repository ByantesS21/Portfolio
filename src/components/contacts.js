function Contact() {
  return (
    <div className="p-8 max-w-xl mx-auto text-center bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h1>
      <p className="text-lg text-gray-700">
        Feel free to reach out for any collaboration or inquiries.
      </p>
      <p className="mt-4">
        Email:{" "}
        <a
          href="mailto:byantessavage@gmail.com"
          className="text-blue-500 underline"
        >
          byantessavage@example.com
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="www.linkedin.com/in/byantestsar21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline transition duration-300 ease-in-out transform hover:scale-105"
        >
          View on LinkedIn
        </a>
      </p>
    </div>
  );
}

export default Contact;
