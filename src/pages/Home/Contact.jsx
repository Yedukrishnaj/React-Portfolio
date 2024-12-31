import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ioljpla', 'template_pe9ua6j', form.current, '9_rxEQi8g0FrRezFO')
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset(); // Clear the form after successful submission
        },
        (error) => {
          console.error('Error:', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-stone-200">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
            <div className="text-black-400">Please fill the contact form.</div>
          </div>
          <img src="./img/e.png" alt="Contact Illustration" className="mt-4 md:mt-0" />
        </div>

        <form noValidate ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm sm:text-base">Full name</label>
            <input
              type="text"
              name="user_name"
              id="name"
              placeholder="Enter your full name"
              className="w-full p-3 rounded border border-gray-300 text-sm sm:text-base"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm sm:text-base">Email</label>
            <input
              id="email"
              name="user_email"
              type="email"
              className="w-full p-3 rounded border border-gray-300 text-sm sm:text-base"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm sm:text-base">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 rounded border border-gray-300 text-sm sm:text-base"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded btn-primary text-gray-900 bg-blue-500 hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
