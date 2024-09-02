// import React from "react";
// import { VerticalTimeline } from "react-vertical-timeline-component";
// import { motion } from "framer-motion";
// import "react-vertical-timeline-component/style.min.css";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";
// import ExperienceCard from "./ExperienceCard";

// const experiences = [
//   {
//     role: "Software Engineer Intern (Full Stack) - The Integrity Company",
//     duration: "May 2024 – Present, Ocean Side, California",
//     details: [
//       "Deployed automation solutions in Salesforce CRM, optimizing workflows and enhancing operational efficiency.",
//       "Implemented algorithms for pre-appointment tasks and automated post-job communication processes.",
//       "Designed and developed a database and a full-stack website to manage and place jobs for the portal."
//     ]
//   },
//   {
//     role: "Research Assistant (AI Security Innovations) - University at Buffalo",
//     duration: "Feb 2024 – Apr 2024, Buffalo, New York",
//     details: [
//       "Pioneered the integration of Transformers to enhance ‘Sven’s’ ability to identify complex security vulnerabilities.",
//       "Utilized advanced LLMs to boost ‘Sven’s’ analytical capabilities, ensuring security in vulnerability assessments."
//     ]
//   },
//   {
//     role: "Senior Lead Engineer / Software Engineer - NTT Data (Apisero Inc)",
//     duration: "Aug 2020 – Aug 2023, Hyderabad, India",
//     details: [
//       "Engineered a MuleSoft-Datadog connector for Indeed, boosting job portal efficiency by 50% and saving $300K annually.",
//       "Led the modernization of 30% of legacy APIs to Salesforce UI, enhancing system integrations and testing across platforms like Workday and AWS.",
//       "Orchestrated the deployment of CI/CD pipelines for AWS and Kubernetes, improving deployment processes.",
//       "Streamlined cloud-based integrations using MuleSoft, elevating Salesforce-MSSQL synchronization efficiency by 99% and saving $100K per year."
//     ]
//   }
// ];



// const Experience = () => (
//   <section id="experience" className="w-full h-auto bg-gradient-to-b from-gray-900 via-black to-gray-900">
//     <div className="container mx-auto px-6">
//       <motion.div variants={textVariant()} className="text-center">
//         <div className="h-16"></div>
//         <p className="text-cyan-500 font-semibold text-xl">What I have done so far</p>
//         <h2 className="text-white text-4xl font-bold mb-10">Work Experience</h2>
//       </motion.div>
//       <VerticalTimeline>
//         {experiences.map((experience, index) => (
//           <ExperienceCard key={`experience-${index}`} experience={experience} />
//         ))}
//       </VerticalTimeline>
//     </div>
//   </section>
// );

// export default SectionWrapper(Experience, "experience");


// Experience.jsx
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    role: "Software Engineer Intern (Full Stack) - The Integrity Company",
    duration: "May 2024 – Present, Ocean Side, California",
    details: [
      "Deployed automation solutions in Salesforce CRM, optimizing workflows and enhancing operational efficiency.",
      "Implemented algorithms for pre-appointment tasks and automated post-job communication processes.",
      "Designed and developed a database and a full-stack website to manage and place jobs for the portal."
    ]
  },
  {
    role: "Research Assistant (AI Security Innovations) - University at Buffalo",
    duration: "Feb 2024 – Apr 2024, Buffalo, New York",
    details: [
      "Pioneered the integration of Transformers to enhance ‘Sven’s’ ability to identify complex security vulnerabilities.",
      "Utilized advanced LLMs to boost ‘Sven’s’ analytical capabilities, ensuring security in vulnerability assessments."
    ]
  },
  {
    role: "Senior Lead Engineer / Software Engineer - NTT Data (Apisero Inc)",
    duration: "Aug 2020 – Aug 2023, Hyderabad, India",
    details: [
      "Engineered a MuleSoft-Datadog connector for Indeed, boosting job portal efficiency by 50% and saving $300K annually.",
      "Led the modernization of 30% of legacy APIs to Salesforce UI, enhancing system integrations and testing across platforms like Workday and AWS.",
      "Orchestrated the deployment of CI/CD pipelines for AWS and Kubernetes, improving deployment processes.",
      "Streamlined cloud-based integrations using MuleSoft, elevating Salesforce-MSSQL synchronization efficiency by 99% and saving $100K per year."
    ]
  }
];

const Experience = () => (
  <section id="experience" className="w-full h-auto bg-gradient-to-b from-gray-900 via-black to-gray-900">
    <div className="container mx-auto px-6">
      <motion.div variants={textVariant()} className="text-center">
        <div className="h-16"></div>
        <p className="text-gradient font-semibold text-xl">
          What I have done so far
        </p>
        <h2 className="text-white text-4xl font-bold mb-10">Work Experience</h2>
      </motion.div>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  </section>
);

export default SectionWrapper(Experience, "experience");


