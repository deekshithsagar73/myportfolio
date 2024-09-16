import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_nlg19ab",
        "template_hy64q9u",
        {
          from_name: form.name,
          to_name: "Deekshith Sagar",
          from_email: form.email,
          to_email: "deekshithsagar73@gmail.com",
          message: form.message,
        },
        "EoVUqwlHMi1jMvYol"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section 
      id="contact" 
      className="w-full h-auto py-28 bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      {/* Flex container for form and image */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-between items-center gap-8">
        
        {/* Contact Form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="w-full lg:w-1/2 p-8 bg-gradient-to-r from-dark via-darker to-darkest rounded-lg shadow-md"
        >
          <h2 className="text-white text-4xl font-bold mb-8">Contact Me</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-darkest py-3 px-4 text-white rounded-lg outline-none border-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-darkest py-3 px-4 text-white rounded-lg outline-none border-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Your Message</label>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="bg-darkest py-3 px-4 text-white rounded-lg outline-none border-none"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-md hover:from-green-500 hover:to-blue-600 transition-colors duration-300"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        {/* Quote Section - Between Form and Picture */}
        <div className="flex flex-col items-center justify-center lg:w-3/6 lg:mx-4 my-6 lg:my-0">
          <p className="text-lg text-white font-semibold italic text-center">
            "Innovation distinguishes between a leader and a follower." - Steve Jobs
          </p>
        </div>

        {/* Contact Picture */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-full lg:w-1/3 flex justify-center lg:justify-end"
        >
          <img
            src="/profile.png"
            alt="Contact me"
            className="w-64 h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

