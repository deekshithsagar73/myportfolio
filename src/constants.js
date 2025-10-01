
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
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "publications",
    title: "Publications",
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
  "Python", "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", 
  "PostgreSQL", "AWS", "Azure", "Docker", "Kubernetes", "Git", "Tailwind CSS",
  "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "YOLO",
  "BERT", "LSTM", "CNN", "Machine Learning", "Deep Learning", "Computer Vision",
  "NLP", "Time Series", "Data Science", "MuleSoft", "Salesforce", "REST APIs",
  "GraphQL", "Microservices", "CI/CD", "Linux", "Agile", "JIRA", "Figma"
];
export const experiences = [
  {
    role: "Full Stack AI Engineer",
    company: "xFact, Inc",
    duration: "Jul 2025 – Sep 2025",
    location: "Boston, Massachusetts, USA",
    details: [
      "Built and launched an AI-powered analytics platform, enabling real-time data exploration and decision-making",
      "Delivered full-stack features 30% faster by independently implementing scalable solutions with React/Next.js, FastAPI",
      "Increased deployment reliability by 40% through CI/CD automation, Dockerized workflows, and enterprise security controls",
      "Developed cloud-native applications with microservices architecture and AI-driven analytics"
    ],
    technologies: ["React", "Next.js", "FastAPI", "Python", "Docker", "CI/CD", "AI/ML"],
    icon: '/assets/web.png'
  },
  {
    role: "Software Developer (Intern)",
    company: "The Integrity Company",
    duration: "May 2024 – July 2025",
    location: "California, USA",
    details: [
      "Enhanced Salesforce CRM efficiency through RESTful API integration and customer portal development with React",
      "Built automated testing suite achieving comprehensive code coverage using Jest and Mocha",
      "Implemented AI-powered analytics features using Django and optimizing frontend responsiveness with Next.js",
      "Developed healthcare and workers' compensation industry solutions with real-time data processing"
    ],
    technologies: ["React", "Next.js", "Django", "Salesforce", "Jest", "Mocha", "REST APIs"],
    icon: '/assets/web.png'
  },
  {
    role: "Research Assistant (AI Innovation lab)",
    company: "University at Buffalo",
    duration: "Feb 2024 – Dec 2024",
    location: "Buffalo, New York, USA",
    details: [
      "Developed a fine-tuned LLM for analyzing vulnerabilities in enterprise repositories, improving detection accuracy by 30%",
      "Built and optimized Code Property Graphs (CPGs) for over 1 million C/C++ functions using Joern and GraphCodeBERT",
      "Published research paper on GraphCodeBERT-Augmented Graph Attention Networks for Code Vulnerability Detection at IEEE CAI 2025",
      "Conducted advanced research in AI security applications and contributed to academic publications"
    ],
    technologies: ["Python", "PyTorch", "GraphCodeBERT", "LLMs", "Machine Learning", "Security", "Research"],
    icon: '/assets/creator.png'
  },
  {
    role: "Senior Lead Engineer / Software Engineer",
    company: "NTT Data (Apisero Inc)",
    duration: "Aug 2020 – Aug 2023",
    location: "Hyderabad, Telangana, India",
    details: [
      "Designed and deployed scalable microservices architecture using Java and Python, reducing latency by 20%",
      "Developed a MuleSoft-Datadog metrics connector, improving system monitoring and performance saving $300K annually",
      "Enhanced ETL pipelines with Apache Spark and Airflow, and assisted in Snowflake-based analytics workflows",
      "Migrated 30% of legacy APIs to microservices, enhancing scalability using Salesforce-AWS integrations",
      "Automated CI/CD pipelines using Jenkins and Kubernetes, reducing deployment times by 40%",
      "Optimized Salesforce-MSSQL synchronization processes, increasing efficiency by 90% and cutting costs by $100K annually"
    ],
    technologies: ["Java", "Python", "MuleSoft", "Salesforce", "AWS", "Kubernetes", "Apache Spark", "Airflow", "Snowflake"],
    icon: '/assets/backend.png'
  },
  {
    role: "Junior Software Engineer Intern",
    company: "EPAM Systems",
    duration: "Jan 2020 – June 2020",
    location: "India",
    details: [
      "Designed and maintained ETL workflows using Hadoop and Apache Spark, improving batch processing performance by 15%",
      "Developed data processing solutions for enterprise clients with focus on scalability and performance",
      "Collaborated with cross-functional teams to deliver data-driven solutions"
    ],
    technologies: ["Java", "Hadoop", "Apache Spark", "ETL", "Data Processing", "Big Data"],
    icon: '/assets/backend.png'
  }
];

export const certifications = [
  {
    name: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    date: "2023",
    credentialId: "SF-ADMIN-2023"
  },
  {
    name: "Salesforce Certified Developer",
    issuer: "Salesforce",
    date: "2023",
    credentialId: "SF-DEV-2023"
  },
  {
    name: "Salesforce Certified Architect",
    issuer: "Salesforce",
    date: "2023",
    credentialId: "SF-ARCH-2023"
  },
  {
    name: "MuleSoft Developer II",
    issuer: "Salesforce",
    date: "2024",
    credentialId: "MULE-DEV-II-2024"
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
    title: "AI-Powered Deep Fake Detection System",
    tech: "PyTorch, ResNet, Ensemble Models, Computer Vision",
    description: "Developed an advanced deep learning system to detect manipulated media using ensemble of ResNet architectures. The system achieves 94% accuracy in identifying deepfakes across multiple video formats and lighting conditions. Implemented real-time processing capabilities and deployed as a REST API service.",
    date: "Mar 2024",
    image: "/assets/project1.png",
    live: "https://deepfake-detector-demo.vercel.app",
    source: "https://github.com/deekshithsagar73",
    tags: [
      { name: "PyTorch", color: "text-red-500" },
      { name: "ResNet", color: "text-blue-500" },
      { name: "AI", color: "text-green-500" },
    ],
  },
  {
    title: "Intelligent Anomaly Detection System",
    tech: "Python, Autoencoders, TensorFlow, Manufacturing Analytics",
    description: "Built an automated defect detection system for manufacturing using variational autoencoders. Reduced manual inspection time by 75% and improved defect detection accuracy to 92%. Integrated with IoT sensors for real-time monitoring and alert generation.",
    date: "Jan 2024",
    image: "/assets/project2.png",
    live: "https://anomaly-detection-demo.netlify.app",
    source: "https://github.com/deekshithsagar73",
    tags: [
      { name: "Python", color: "text-yellow-500" },
      { name: "Autoencoders", color: "text-purple-500" },
      { name: "IoT", color: "text-green-500" },
    ],
  },
  {
    title: "Energy Consumption Forecasting Platform",
    tech: "Python, LSTM, Time Series, Energy Analytics",
    description: "Developed a comprehensive energy forecasting system using advanced LSTM networks to predict consumption patterns. Helped utility companies optimize resource allocation and reduce costs by 15%. Features interactive dashboards and real-time predictions.",
    date: "Nov 2023",
    image: "/assets/project3.png",
    live: "https://energy-forecast-platform.herokuapp.com",
    source: "https://github.com/deekshithsagar73",
    tags: [
      { name: "Python", color: "text-yellow-500" },
      { name: "LSTM", color: "text-blue-500" },
      { name: "Analytics", color: "text-green-500" },
    ],
  },
  {
    title: "Advanced Sentiment Analysis Engine",
    tech: "Python, BERT, NLP, Social Media Analytics",
    description: "Created a sophisticated sentiment analysis system using BERT and LSTM architectures. Achieved 91% accuracy in analyzing customer sentiment across multiple social media platforms. Features real-time processing and multilingual support.",
    date: "Oct 2023",
    image: "/assets/project4.png",
    live: "https://sentiment-analyzer-demo.vercel.app",
    source: "https://github.com/deekshithsagar73",
    tags: [
      { name: "Python", color: "text-yellow-500" },
      { name: "BERT", color: "text-blue-500" },
      { name: "NLP", color: "text-green-500" },
    ],
  },
  {
    title: "Real-Time Object Detection System",
    tech: "Python, YOLOv8, OpenCV, Computer Vision",
    description: "Implemented a high-performance object detection system using YOLOv8 for real-time surveillance applications. Achieved 89% mAP on COCO dataset with optimized inference speed of 45 FPS. Features multi-class detection and tracking capabilities.",
    date: "Sep 2023",
    image: "/assets/project1.png",
    live: "https://object-detection-demo.netlify.app",
    source: "https://github.com/deekshithsagar73",
    tags: [
      { name: "Python", color: "text-yellow-500" },
      { name: "YOLOv8", color: "text-blue-500" },
      { name: "OpenCV", color: "text-green-500" },
    ],
  },
  {
    title: "Smart Weather Analytics Platform",
    tech: "React, Node.js, Express, Weather API",
    description: "Built a comprehensive weather analytics platform with predictive capabilities using machine learning. Features interactive maps, historical data analysis, and personalized weather recommendations. Integrated with multiple weather APIs for accurate forecasting.",
    date: "Aug 2023",
    image: "/assets/project2.png",
    live: "https://smart-weather-app.herokuapp.com",
    source: "https://github.com/deekshithsagar73",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "Node.js", color: "text-green-500" },
      { name: "ML", color: "text-purple-500" },
    ],
  },
  {
    title: "Enterprise E-Commerce Solution",
    tech: "React, Node.js, MongoDB, Payment Integration",
    description: "Developed a full-stack e-commerce platform with advanced features including AI-powered product recommendations, real-time inventory management, and secure payment processing. Supports multiple payment gateways and features comprehensive admin dashboard.",
    date: "Jul 2023",
    image: "/assets/project3.png",
    live: "https://enterprise-ecommerce-demo.vercel.app",
    source: "https://github.com/deekshithsagar73",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "Node.js", color: "text-green-500" },
      { name: "MongoDB", color: "text-gray-500" },
    ],
  },
  {
    title: "Real-Time Collaborative Chat Platform",
    tech: "React, Socket.io, Node.js, WebRTC",
    description: "Created a feature-rich chat application with video calling, file sharing, and collaborative features. Supports multiple rooms, private messaging, and real-time notifications. Built with scalable architecture supporting thousands of concurrent users.",
    date: "Jun 2023",
    image: "/assets/project4.png",
    live: "https://collaborative-chat-demo.herokuapp.com",
    source: "https://github.com/deekshithsagar73",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "Socket.io", color: "text-yellow-500" },
      { name: "WebRTC", color: "text-green-500" },
    ],
  },
  {
    title: "IntelliFit Exercise Detection System",
    tech: "OpenCV, TensorFlow, Docker, Computer Vision",
    description: "Built a fitness tracking platform utilizing OpenCV and TensorFlow for real-time exercise detection. Features pose estimation, exercise counting, and form analysis. Deployed using Docker for scalable deployment.",
    date: "Dec 2023",
    image: "/assets/project1.png",
    live: "https://intellifit-demo.herokuapp.com",
    source: "https://github.com/deekshithsagar73",
    tags: [
      { name: "OpenCV", color: "text-blue-500" },
      { name: "TensorFlow", color: "text-green-500" },
      { name: "Docker", color: "text-gray-500" },
    ],
  },
  {
    title: "NLP-Based Job Resume Analyzer",
    tech: "Python, NLP, Machine Learning, CI/CD",
    description: "Engineered an AI resume analysis tool employing NLP techniques for automated resume screening. Features keyword extraction, skill matching, and candidate ranking. Integrated into CI/CD pipelines for efficient deployment.",
    date: "Nov 2023",
    image: "/assets/project2.png",
    live: "https://resume-analyzer-demo.vercel.app",
    source: "https://github.com/deekshithsagar73",
    tags: [
      { name: "Python", color: "text-yellow-500" },
      { name: "NLP", color: "text-green-500" },
      { name: "ML", color: "text-purple-500" },
    ],
  },
  {
    title: "AI-Powered Analytics Platform",
    tech: "React, FastAPI, AWS, TypeScript, Serverless",
    description: "Built and launched an AI-powered analytics platform enabling real-time data exploration and decision-making. Delivered full-stack features 30% faster with React/Next.js and FastAPI. Increased deployment reliability by 40% through CI/CD automation and Dockerized workflows.",
    date: "Sep 2025",
    image: "/assets/project1.png",
    live: "https://analytics-demo.xfact.com",
    source: "https://github.com/deekshithsagar73",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "FastAPI", color: "text-green-500" },
      { name: "AWS", color: "text-orange-500" },
      { name: "TypeScript", color: "text-blue-400" },
    ],
  },
  {
    title: "CRM & Customer Portal Development",
    tech: "React, Django, REST APIs, Salesforce Integration",
    description: "Enhanced Salesforce CRM efficiency through RESTful API integration and customer portal development with React. Built automated testing suite achieving comprehensive code coverage using Jest and Mocha. Implemented AI-powered analytics features using Django.",
    date: "July 2025",
    image: "/assets/project2.png",
    live: "https://integrity-company-portal.com",
    source: "https://github.com/deekshithsagar73",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "Django", color: "text-green-500" },
      { name: "Salesforce", color: "text-blue-400" },
      { name: "REST APIs", color: "text-purple-500" },
    ],
  },
];

