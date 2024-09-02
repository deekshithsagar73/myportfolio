// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         "service_q85uc1i",
//         "template_rlw4pci",
//         {
//           from_name: form.name,
//           to_name: "Deekshith Sagar",
//           from_email: form.email,
//           to_email: "deekshithsagar73@gmail.com",
//           message: form.message,
//         },
//         "cfzSTJF2WOkKfTmjh"
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           alert("Ahh, something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <section id="contact" className="w-full h-auto py-20 bg-gray-900">
//       <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
//         <motion.div
//           variants={slideIn("left", "tween", 0.2, 1)}
//           className="w-full lg:w-1/2 p-8 bg-gradient-to-r from-dark via-darker to-darkest rounded-lg shadow-md"
//         >
//           <h2 className="text-white text-4xl font-bold mb-8">Contact Me</h2>
//           <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
//             <div className="flex flex-col">
//               <label className="text-white font-medium mb-2">Your Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="What's your good name?"
//                 className="bg-darkest py-3 px-4 text-white rounded-lg outline-none border-none font-medium"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="text-white font-medium mb-2">Your Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="What's your email?"
//                 className="bg-darkest py-3 px-4 text-white rounded-lg outline-none border-none font-medium"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label className="text-white font-medium mb-2">Your Message</label>
//               <textarea
//                 rows={7}
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 placeholder="What would you like to say?"
//                 className="bg-darkest py-3 px-4 text-white rounded-lg outline-none border-none font-medium"
//               />
//             </div>
//             <button
//   type="submit"
//   className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-md hover:from-green-500 hover:to-blue-600 transition-colors duration-300"
// >
//   {loading ? "Sending..." : "Send"}
// </button>

//           </form>
//         </motion.div>

//         <motion.div
//   variants={slideIn("right", "tween", 0.2, 1)}
//   className="w-full lg:w-1/2 mt-10 lg:mt-0 flex items-center justify-center"
// >
//   <div className="relative w-1/2 lg:w-4/5 max-w-lg">
//     <img
//       src="/profile.png"
//       alt="Contact me"
//       className="w-full h-auto rounded-lg shadow-lg"
//     />
//     <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-900 opacity-60"></div>
//   </div>
// </motion.div>

//       </div>
//     </section>
//   );
// };

// export default SectionWrapper(Contact, "contact");
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
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
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_q85uc1i",
        "template_rlw4pci",
        {
          from_name: form.name,
          to_name: "Deekshith Sagar",
          from_email: form.email,
          to_email: "deekshithsagar73@gmail.com",
          message: form.message,
        },
        "cfzSTJF2WOkKfTmjh"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="w-full h-auto py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
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
                className="bg-darkest py-3 px-4 text-white rounded-lg outline-none border-none font-medium"
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
                className="bg-darkest py-3 px-4 text-white rounded-lg outline-none border-none font-medium"
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
                className="bg-darkest py-3 px-4 text-white rounded-lg outline-none border-none font-medium"
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

        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex items-center justify-center">
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="relative w-1/2 lg:w-3/5 max-w-xs"
          >
            <img
              src="/profile.png"
              alt="Contact me"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          <p className="mt-6 text-lg text-white font-semibold italic text-center">
            "Innovation distinguishes between a leader and a follower." - Steve Jobs
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
