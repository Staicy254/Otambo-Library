import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your actual EmailJS credentials
      await emailjs.send(
        "service_08mlm1p",  // EmailJS Service ID
        "template_6smkral", // EmailJS Template ID
        formData,
        "dHN8N9OhUt3pY10rA"   // EmailJS Public Key
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Email sending error:", error);
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <section id="contact" className="py-12 px-6">
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold text-center mb-6 dark:text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Name */}
        <div className="mb-4">
          <label className="block text-lg dark:text-white">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-lg dark:text-white">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-lg dark:text-white">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg h-32 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>

        {/* Status Message */}
        {status && <p className="mt-4 text-center text-green-500">{status}</p>}
      </motion.form>
    </section>
  );
};

export default ContactSection;
