
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
export const services = [
  {
    title: "AI/ML Developer",
    icon: "ai.png", 
  },
  {
    title: "Mulesoft Expert",
    icon: "mule.svg", 
  },
  {
    title: "FullStack Developer",
    icon: "microservice.png", 
  },
  {
    title: "Data Scientist",
    icon: "ds.png", 
  },
];

export const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", 
  "Python", "Django", "Git", "Docker", "AWS", "Tailwind CSS", "TypeScript",
  "GraphQL", "Jest", "Redux", "Next.js", "Gatsby", "Figma", "PostgreSQL",
  "Firebase", "Java", "C++", "Kubernetes", "Azure", "Linux", "JIRA", "Agile"
];
export const experiences = [
  {
    role: "Software Engineer Intern (Full Stack) - The Integrity Company",
    duration: "May 2024 – Present, Ocean Side, California",
    details: [
      "Deployed automation solutions in Salesforce CRM, optimizing workflows and enhancing operational efficiency.",
      "Implemented algorithms for pre-appointment tasks and automated post-job communication processes.",
      "Designed and developed a database and a full-stack website to manage and place jobs for the portal."
    ],
    icon: '/assets/internship.png' // Replace with actual icon paths
  },
  {
    role: "Research Assistant (AI Security Innovations) - University at Buffalo",
    duration: "Feb 2024 – Apr 2024, Buffalo, New York",
    details: [
      "Pioneered the integration of Transformers to enhance ‘Sven’s’ ability to identify complex security vulnerabilities.",
      "Utilized advanced LLMs to boost ‘Sven’s’ analytical capabilities, ensuring security in vulnerability assessments."
    ],
    icon: '/assets/research.png'
  },
  {
    role: "Senior Lead Engineer / Software Engineer - NTT Data (Apisero Inc)",
    duration: "Aug 2020 – Aug 2023, Hyderabad, India",
    details: [
      "Engineered a MuleSoft-Datadog connector for Indeed, boosting job portal efficiency by 50% and saving $300K annually.",
      "Led the modernization of 30% of legacy APIs to Salesforce UI, enhancing system integrations and testing across platforms like Workday and AWS.",
      "Orchestrated the deployment of CI/CD pipelines for AWS and Kubernetes, improving deployment processes.",
      "Streamlined cloud-based integrations using MuleSoft, elevating Salesforce-MSSQL synchronization efficiency by 99% and saving $100K per year."
    ],
    icon: '/assets/lead-engineer.png'
  }
];

export const fontProps = {
  font: "/helvetiker_regular.typeface.json",
  fontSize: 2.5,
  letterSpacing: -0.05,
  lineHeight: 1,
  "material-toneMapped": false,
};
export const projects = [
  {
    title: "Deep Fake Detection System",
    tech: "PyTorch, ResNet, Ensemble Models",
    description: "Designed and continually enhanced a model to detect manipulated media, supporting integrity in digital content.",
    date: "Mar 2024",
    image: "/assets/project1.png",
    live: "https://yourliveproject.com/deepfake",
    source: "https://github.com/yourusername/deepfake-detection",
    tags: [
      { name: "PyTorch", color: "text-red-500" },
      { name: "ResNet", color: "text-blue-500" },
      { name: "AI", color: "text-green-500" },
    ],
  },
  {
    title: "Autoencoder for Anomaly Detection",
    tech: "Python, Autoencoders",
    description: "Automated defect detection in manufacturing, reducing manual inspection and improving error detection efficiency.",
    date: "Jan 2024",
    image: "/assets/project2.png",
    live: "https://yourliveproject.com/autoencoder",
    source: "https://github.com/yourusername/autoencoder-anomaly-detection",
    tags: [
      { name: "Python", color: "text-yellow-500" },
      { name: "Autoencoders", color: "text-purple-500" },
    ],
  },
  {
    title: "Time-Series Forecasting with RNNs",
    tech: "Python, RNN, LSTM",
    description: "Developed models to predict energy usage patterns, aiding utility companies in resource and grid optimization.",
    date: "Nov 2023",
    image: "/assets/project2.png",
    live: "https://yourliveproject.com/timeseries",
    source: "https://github.com/yourusername/time-series-forecasting",
    tags: [
      { name: "Python", color: "text-yellow-500" },
      { name: "RNN", color: "text-red-500" },
      { name: "LSTM", color: "text-blue-500" },
    ],
  },
  {
    title: "Sentiment Analysis Using LSTM",
    tech: "Python, LSTM, NLP",
    description: "Analyzed customer sentiment from social media data, achieving over 90% accuracy to improve marketing strategies.",
    date: "Oct 2023",
    image: "/assets/project2.png",
    live: "https://yourliveproject.com/sentiment-analysis",
    source: "https://github.com/yourusername/sentiment-analysis",
    tags: [
      { name: "Python", color: "text-yellow-500" },
      { name: "LSTM", color: "text-blue-500" },
      { name: "NLP", color: "text-green-500" },
    ],
  },
  {
    title: "Real-Time Object Detection",
    tech: "Python, OpenCV, YOLOv4",
    description: "Implemented real-time object detection to enhance automation in surveillance systems, achieving high accuracy.",
    date: "Sep 2023",
    image: "/assets/project2.png",
    live: "https://yourliveproject.com/object-detection",
    source: "https://github.com/yourusername/object-detection",
    tags: [
      { name: "Python", color: "text-yellow-500" },
      { name: "OpenCV", color: "text-blue-500" },
      { name: "YOLOv4", color: "text-green-500" },
    ],
  },
  {
    title: "Weather Forecasting App",
    tech: "React, Node.js, Express",
    description: "Built a dynamic web application that provides real-time weather updates using OpenWeather API.",
    date: "Aug 2023",
    image: "/assets/project2.png",
    live: "https://yourliveproject.com/weather-forecast",
    source: "https://github.com/yourusername/weather-forecast",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "Node.js", color: "text-green-500" },
      { name: "Express", color: "text-gray-500" },
    ],
  },
  {
    title: "E-Commerce Platform",
    tech: "React, Node.js, MongoDB",
    description: "Developed a full-stack e-commerce platform with payment integration and user authentication.",
    date: "Jul 2023",
    image: "/assets/project2.png",
    live: "https://yourliveproject.com/e-commerce",
    source: "https://github.com/yourusername/e-commerce-platform",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "Node.js", color: "text-green-500" },
      { name: "MongoDB", color: "text-gray-500" },
    ],
  },
  {
    title: "Chat Application",
    tech: "React, Socket.io, Node.js",
    description: "Created a real-time chat application with multiple room support and private messaging.",
    date: "Jun 2023",
    image: "/assets/project2.png",
    live: "https://yourliveproject.com/chat",
    source: "https://github.com/yourusername/chat-application",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "Socket.io", color: "text-yellow-500" },
      { name: "Node.js", color: "text-green-500" },
    ],
  },
];

