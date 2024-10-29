import React, { useState } from "react";

const Contact = () => {
  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("message", message);
    data.append("access_key", "8b556807-71d9-4ec6-829f-4135009a557b"); // Keep this key secure

    // Send form data to Web3Forms
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const responseData = await response.json();

      // Check the response from Web3Forms API
      if (response.ok && responseData.success) {
        setResult("Email Submitted Successfully");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Error:", responseData);
        setResult(responseData.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setResult("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 mb-4">
              Let's Talk
            </h3>
            <p>
              I am open to partner up for Full stack projects and Web
              Development Projects.
            </p>
            <div className="mb-4 ">
              <span className="inline-block text-pink-400 mr-2">✉️</span>
              <a href="mailto:jeanstaicy21@gmail.com" className="hover:underline">
                jeanstaicy21@gmail.com
              </a>
            </div>

            <div className="mb-4 ">
              <span className="inline-block text-pink-400 mr-2">📞</span>
              <a href="tel:+254748021385" className="hover:underline">
                +254 748021385
              </a>
            </div>

            <div className="mb-4">
              <span className="inline-block text-pink-400 mr-2">🐙</span>
              <a
                href="https://github.com/Staicy254"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/Staicy254
              </a>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600
                    focus:outline-none focus:border-pink-400"
                  placeholder="Enter your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600
                    focus:outline-none focus:border-pink-400"
                  placeholder="Enter your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600
                    focus:outline-none focus:border-pink-400"
                  rows={5}
                  placeholder="Enter your Message"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-pink-400 to-blue-500 text-white
                  transform transition-transform duration-300 hover:scale-105 px-8 py-2
                  rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>

            <p className="mt-4">{result}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
