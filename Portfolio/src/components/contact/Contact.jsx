import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_08mlm1p',    //  EmailJS Service ID
      'template_6smkral',   //  EmailJS Template ID
      form.current,
      'dHN8N9OhUt3pY10rA'     //  EmailJS Public Key
    )
    .then(
      (result) => {
        setStatusMessage('Message sent successfully!');
        console.log(result.text);
        form.current.reset(); // Clears form fields after submission
      },
      (error) => {
        setStatusMessage('Failed to send message. Please try again.');
        console.error(error.text);
      }
    );
  };

  return (
    <section id="contact" data-aos="fade-up" data-aos-delay="400">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Contact Me
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-xl font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-xl font-medium text-white">
              Message
            </label>
            <textarea
              name="message"
              rows="6"
              className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Leave a comment ..."
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg"
          >
            Send Message
          </button>
        </form>
        {statusMessage && (
          <p className="mt-4 text-center text-white">{statusMessage}</p>
        )}
      </div>
    </section>
  );
}
