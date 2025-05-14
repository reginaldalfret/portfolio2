import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-8">
          Feel free to reach out to me through the following channels:
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Email
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            LinkedIn
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
