function Contact() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg">
        Feel free to reach out for any project collaboration or inquiries.
      </p>
      <p className="mt-4">
        Email:{" "}
        <a
          href="mailto:your-email@example.com"
          className="text-blue-500 underline"
        >
          your-email@example.com
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          My LinkedIn
        </a>
      </p>
    </div>
  );
}

export default Contact;
