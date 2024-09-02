
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
    image: "/images/deep_fake_detection.png",
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
    image: "/images/autoencoder_anomaly_detection.png",
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
    image: "/images/time_series_forecasting.png",
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
    image: "/images/sentiment_analysis.png",
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
    image: "/images/object_detection.png",
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
    image: "/images/weather_forecasting.png",
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
    image: "/images/e_commerce_platform.png",
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
    image: "/images/chat_application.png",
    live: "https://yourliveproject.com/chat",
    source: "https://github.com/yourusername/chat-application",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "Socket.io", color: "text-yellow-500" },
      { name: "Node.js", color: "text-green-500" },
    ],
  },
];



// export const projects = [
//   {
//     name: "Deep Fake Detection System",
//     tech: "PyTorch, ResNet, Ensemble Models",
//     description: "Designed and continually enhanced a model to detect manipulated media, supporting integrity in digital content.",
//     date: "Mar 2024",
//     image: "/images/deep_fake_detection.png",  // Replace with your image path
//     live: "https://yourliveproject.com/deepfake",  // Replace with your live project link
//     source: "https://github.com/yourusername/deepfake-detection",  // Replace with your GitHub link
//     tags: [
//       { name: "PyTorch", color: "text-red-500" },
//       { name: "ResNet", color: "text-blue-500" },
//       { name: "AI", color: "text-green-500" },
//     ],
//   },
//   {
//     name: "Autoencoder for Anomaly Detection",
//     tech: "Python, Autoencoders",
//     description: "Automated defect detection in manufacturing, reducing manual inspection and improving error detection efficiency.",
//     date: "Jan 2024",
//     image: "/images/autoencoder_anomaly_detection.png",  // Replace with your image path
//     live: "https://yourliveproject.com/autoencoder",  // Replace with your live project link
//     source: "https://github.com/yourusername/autoencoder-anomaly-detection",  // Replace with your GitHub link
//     tags: [
//       { name: "Python", color: "text-yellow-500" },
//       { name: "Autoencoders", color: "text-purple-500" },
//     ],
//   },
//   {
//     name: "Time-Series Forecasting with RNNs",
//     tech: "Python, RNN, LSTM",
//     description: "Developed models to predict energy usage patterns, aiding utility companies in resource and grid optimization.",
//     date: "Nov 2023",
//     image: "/images/time_series_forecasting.png",  // Replace with your image path
//     live: "https://yourliveproject.com/timeseries",  // Replace with your live project link
//     source: "https://github.com/yourusername/time-series-forecasting",  // Replace with your GitHub link
//     tags: [
//       { name: "Python", color: "text-yellow-500" },
//       { name: "RNN", color: "text-red-500" },
//       { name: "LSTM", color: "text-blue-500" },
//     ],
//   },
//   {
//     name: "Sentiment Analysis Using LSTM",
//     tech: "Python, LSTM, NLP",
//     description: "Analyzed customer sentiment from social media data, achieving over 90% accuracy to improve marketing strategies.",
//     date: "Oct 2023",
//     image: "/images/sentiment_analysis.png",  // Replace with your image path
//     live: "https://yourliveproject.com/sentiment-analysis",  // Replace with your live project link
//     source: "https://github.com/yourusername/sentiment-analysis",  // Replace with your GitHub link
//     tags: [
//       { name: "Python", color: "text-yellow-500" },
//       { name: "LSTM", color: "text-blue-500" },
//       { name: "NLP", color: "text-green-500" },
//     ],
//   },
// ];
