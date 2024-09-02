import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: "/python.png" },
  { name: "Java", icon: "/java.png" },
  { name: "JavaScript", icon: "/javascript.png" },
  { name: "C/C++", icon: "/cpp.png" },
  { name: "C#", icon: "/c-sharp.png" },
  { name: "Golang", icon: "/golang.png" },
  { name: "TypeScript", icon: "/Typescript.png" },
  { name: "HTML/CSS", icon: "/html.png" },
  { name: "React", icon: "/react.png" },
  { name: "Node.js", icon: "/nodejs.png" },
  { name: "MySQL", icon: "/mysql.png" },
  { name: "R", icon: "/R.svg" },
  { name: "Dataweave", icon: "/dataweave.png" },
  { name: "Bash", icon: "/bash.png" },
  { name: "Git", icon: "/git.png" },
  { name: "Docker", icon: "/docker.png" },
  { name: "Jenkins", icon: "/jenkins.png" },
  { name: "Postman", icon: "/postman.png" },
  { name: "Jira", icon: "/jira.jpg" },
  { name: "AWS", icon: "/aws.png" },
  { name: "MuleSoft", icon: "/mulesoft.png" },
  { name: "Azure DevOps", icon: "/azure.png" },
  { name: "Salesforce", icon: "/salesforce.png" },
  { name: "Anypoint Runtime Manager", icon: "/anypoint.png" },
  { name: "Apache Kafka", icon: "/kafka.png" },
  { name: "Hadoop", icon: "/hadoop.png" },
  { name: "Spark", icon: "/spark.png" },
  { name: "TensorFlow", icon: "/tensorflow.png" },
  { name: "PyTorch", icon: "/pytorch.png" },
  { name: "Keras", icon: "/keras.png" },
  { name: "Scikit-Learn", icon: "/scikit_learn.svg" },
  { name: "Numpy", icon: "/numpy.png" },
  { name: "Pandas", icon: "/pandas.png" },
  { name: "Flask", icon: "/flask.png" },
  { name: "gRPC", icon: "/grpc.png" },
  { name: "GraphQL", icon: "/graphql.png" }
];


const SkillsScroller = () => {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollContainer;
    if (direction === "left") {
      current.scrollLeft -= current.offsetWidth / 2;
    } else {
      current.scrollLeft += current.offsetWidth / 2;
    }
  };

  return (
    <div className="flex items-center justify-center w-full py-8 bg-transparent">
      <button
        className="p-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 rounded-full shadow-lg"
        onClick={() => scroll("left")}
      >
        <ChevronLeftIcon className="w-10 h-10 text-white" />
      </button>
      <motion.div
        className="flex overflow-x-auto scroll-smooth space-x-6 hide-scrollbar mx-4"
        ref={scrollContainer}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center flex-shrink-0 w-32 h-32"
            style={{ scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-2" />
            <p className="text-white text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
      <button
        className="p-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 rounded-full shadow-lg"
        onClick={() => scroll("right")}
      >
        <ChevronRightIcon className="w-10 h-10 text-white" />
      </button>
    </div>
  );
};

export default SkillsScroller;
