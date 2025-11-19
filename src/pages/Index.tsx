import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChess, FaCode, FaDownload, FaBars, FaTimes, FaMoon, FaSun, FaArrowDown, FaAws, FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaDatabase, FaRocket, FaCheckCircle, FaCopy, FaArrowUp, FaGraduationCap, FaCertificate, FaTrophy, FaMapMarkerAlt, FaPaperPlane, FaCloud, FaMobile, FaChalkboardTeacher } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiFirebase, SiKubernetes, SiTerraform, SiFlutter, SiDart, SiCplusplus, SiJavascript, SiGit, SiPandas, SiExpress, SiLeetcode } from 'react-icons/si';
import { FaChartBar } from 'react-icons/fa';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('all');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const info = {
    name: "Ashwin Nair",
    title: "Software Developer | Cloud | AI",
    tagline: "Building scalable cloud solutions and intelligent systems",
    bio: "Graduate student at Northeastern University specializing in cloud architecture, AI systems, and full-stack development. With 2+ years of experience in software development and teaching, I'm passionate about leveraging cutting-edge technologies to solve complex problems and mentor the next generation of developers.",
    email: "nair.ash@northeastern.edu",
    location: "Boston, MA",
    github: "https://github.com/nairashwin9297",
    linkedin: "https://www.linkedin.com/in/ashwinnair09/",
    leetcode: "https://leetcode.com/u/ashwin9297nair/",
    resumeUrl: "https://drive.google.com/uc?export=download&id=1yJJyoT9FVvQZN-rt52Ps11ixS1TUh0yK",
    profilePhoto: "https://drive.google.com/uc?export=view&id=1R4Du3nnOGBJdxzDWgao4ifRAVMb22M4Q",
    awsCertUrl: "https://drive.google.com/uc?export=download&id=10hoXOzGazUqvI_miQZG-f3cs5hg_XekN",
    awsBadge: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png",
    yearsOfExperience: 2
  };

  const projects = [
    { id: 1, name: "AWS Cloud Infrastructure", description: "Automated scalable AWS infrastructure with VPC and dynamically distributed subnets across multiple availability zones using Infrastructure as Code", technologies: ["AWS", "Terraform", "Packer", "CloudWatch", "API Gateway", "S3"], category: "cloud", github: "https://github.com/orgs/Cloud-computing-6225/repositories", demo: null, featured: true },
    { id: 2, name: "Verbello", description: "A gamified language learning platform supporting 5 languages using React, Node.js, and MongoDB with interactive quizzes and immersive content", technologies: ["React", "Node.js", "MongoDB", "Express"], category: "fullstack", github: "https://github.com/nairashwin9297/Verbello-version-2", demo: "https://verbello.netlify.app/", featured: true },
    { id: 3, name: "OrderHub", description: "Food ordering management system integrating SQL Server database with React.js and Node.js, enhanced with Power BI visualizations for real-time analytics", technologies: ["React.js", "Node.js", "SQL Server", "Power BI"], category: "fullstack", github: "https://github.com/nairashwin9297/OrderHub", demo: null, featured: true },
    { id: 4, name: "GenAI Projects Collection", description: "Collection of 7 machine learning and generative AI projects including RAG systems, neural networks, GANs, LLM fine-tuning, and diffusion models", technologies: ["Python", "TensorFlow", "PyTorch", "FAISS", "LangChain", "Transformers"], category: "ai", github: "https://github.com/nairashwin9297/genAI_projects", demo: null, featured: true },
    { id: 5, name: "Movie Recommender", description: "Personal movie recommendation system using hybrid Content-Based and Collaborative Filtering with advanced text analysis", technologies: ["Python", "Machine Learning", "NLP", "Pandas", "Scikit-learn"], category: "ai", github: "https://github.com/nairashwin9297", demo: null, featured: false },
    { id: 6, name: "Food Ordering Mobile App", description: "Cross-platform food ordering mobile app for Android and iOS with secure JWT authentication, Firebase integration, and Google Places API", technologies: ["Flutter", "Firebase", "Android", "iOS", "Google Places API"], category: "fullstack", github: "https://github.com/nairashwin9297", demo: null, featured: false }
  ];

  const experiences = [
    { id: 1, company: "Northeastern University", role: "Teaching Assistant – Generative AI", location: "Boston, MA", period: "Sep 2025 – Dec 2025", achievements: ["Guided 28 graduate students in generative AI fundamentals including RAG systems, neural networks, and LLM fine-tuning", "Evaluated 8 projects spanning text classification (DistilBERT, LSTM), image generation (GANs, diffusion models), and AI Agents"], technologies: ["Python", "PyTorch", "Transformers", "RAG", "LLM", "GANs"] },
    { id: 2, company: "Northeastern University", role: "Teaching Assistant – Data Structures and Algorithms", location: "Boston, MA", period: "May 2025 – Aug 2025", achievements: ["Mentored 30 graduate students in advanced data structures and algorithms", "Evaluated 15+ programming assignments in Java and Python"], technologies: ["Java", "Python", "Data Structures", "Algorithms"] },
    { id: 3, company: "Built Better LLC", role: "Software Development Intern", location: "Newington, Connecticut", period: "Jan 2025 – May 2025", achievements: ["Developed food ordering mobile app (MVP) for Android and iOS using Flutter and Firebase", "Integrated Google Places API reducing manual entry time by 40%"], technologies: ["Flutter", "Firebase", "Android", "iOS", "JWT"] },
    { id: 4, company: "Pridevel Consulting", role: "Software Development Engineer", location: "Mumbai, India", period: "Aug 2021 – Aug 2023", achievements: ["Led development of scalable rewards system using React.js, Node.js, and TypeScript, enhancing user engagement by 25%", "Reduced release cycles by 20% deploying 5 key components with Docker, GitHub Actions, and CI/CD pipelines", "Optimized MongoDB schemas, improving query performance by 30%"], technologies: ["React.js", "Node.js", "TypeScript", "Docker", "AWS", "MongoDB"] }
  ];

  const skills = {
    languages: [
      { name: "Java", icon: FaJava, level: 90 },
      { name: "Python", icon: FaPython, level: 90 },
      { name: "C/C++", icon: SiCplusplus, level: 85 },
      { name: "JavaScript", icon: SiJavascript, level: 90 },
      { name: "TypeScript", icon: SiTypescript, level: 85 },
      { name: "Dart", icon: SiDart, level: 80 }
    ],
    frameworks: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Flutter", icon: SiFlutter }
    ],
    databases: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQL Server", icon: FaDatabase },
      { name: "Firebase", icon: SiFirebase }
    ],
    cloud: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform }
    ],
    tools: [
      { name: "Git", icon: SiGit },
      { name: "Power BI", icon: FaChartBar },
      { name: "Pandas", icon: SiPandas }
    ]
  };

  const education = [
    { degree: "Master of Science in Information Systems", university: "Northeastern University", location: "Boston, MA", period: "Expected Dec 2025", gpa: "3.84", courses: ["Data Structures", "Web Development", "Database Management", "Cloud Computing", "Gen AI"] },
    { degree: "Bachelor of Engineering", university: "University of Mumbai", location: "Mumbai, India", period: "Jun 2015 - Apr 2019", courses: ["C++", "Database Management Systems"] }
  ];

  const achievements = [
    { title: "AWS Certified Solutions Architect - Associate", type: "certification", icon: FaCertificate, date: "2024", badge: info.awsBadge, certUrl: info.awsCertUrl },
    { title: "Harvard Blockchain Hackathon - Top 15", type: "hackathon", icon: FaTrophy, description: "Selected among top 15 teams to present blockchain solution" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.pageYOffset / totalScroll) * 100);
      setShowScrollTop(window.pageYOffset > 500);
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleFormSubmit = () => {
    setNotificationMessage('Message sent successfully! I\'ll get back to you soon.');
    setShowNotification(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowNotification(false), 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(info.email);
    setNotificationMessage('Email copied to clipboard!');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const filteredProjects = projectFilter === 'all' ? projects : projects.filter(p => p.category === projectFilter);
  const navItems = ['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact'];
  
  const experienceCountUp = useCountUp(info.yearsOfExperience, 2000, 0);
  const gpaCountUp = useCountUp(3.84, 2000, 2);
  const studentsCountUp = useCountUp(58, 2000, 0);

  return (
    <div className={`${darkMode ? 'dark' : ''} transition-colors duration-300`}>
      <div className="bg-background text-foreground min-h-screen">
        <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />
        </div>

        <AnimatePresence>
          {showNotification && (
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }} className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2">
              <FaCheckCircle />{notificationMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-background/80 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>AN</motion.div>
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`transition-colors hover:text-primary ${activeSection === item.toLowerCase() ? 'text-primary font-semibold' : ''}`}>{item}</button>
                ))}
                <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg bg-muted hover:scale-110 transition-transform">
                  {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-500" />}
                </button>
              </div>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg bg-muted">
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-card border-t border-border">
                <div className="px-4 py-4 space-y-3">
                  {navItems.map((item) => (
                    <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left py-2 hover:text-primary transition-colors">{item}</button>
                  ))}
                  <button onClick={() => setDarkMode(!darkMode)} className="flex items-center gap-2 py-2">
                    {darkMode ? <><FaSun /> Light Mode</> : <><FaMoon /> Dark Mode</>}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-gray-900 dark:via-background dark:to-gray-900"></div>
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div key={i} className="absolute w-2 h-2 bg-primary/20 rounded-full" animate={{ x: [Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)], y: [Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800), Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)] }} transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }} style={{ left: Math.random() * 100 + '%', top: Math.random() * 100 + '%' }} />
            ))}
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">{info.name}</span></h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6">{info.title}</p>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{info.tagline}</p>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <a href={info.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-muted rounded-full hover:scale-110 transition-transform"><FaGithub className="text-2xl" /></a>
                  <a href={info.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-muted rounded-full hover:scale-110 transition-transform"><FaLinkedin className="text-2xl text-blue-600" /></a>
                  <a href={info.leetcode} target="_blank" rel="noopener noreferrer" className="p-3 bg-muted rounded-full hover:scale-110 transition-transform"><SiLeetcode className="text-2xl text-yellow-600" /></a>
                  <button onClick={() => scrollToSection('contact')} className="p-3 bg-muted rounded-full hover:scale-110 transition-transform"><FaEnvelope className="text-2xl" /></button>
                  <div className="p-3 bg-muted rounded-full hover:scale-110 transition-transform cursor-pointer"><FaChess className="text-2xl" /></div>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-shadow">Get In Touch</motion.button>
                  <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={info.resumeUrl} className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2"><FaDownload /> Download Resume</motion.a>
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="mt-16"><FaArrowDown className="text-3xl mx-auto text-muted-foreground" /></motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-4xl font-bold text-center mb-12">About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span></h2>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{info.bio}</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-card rounded-lg shadow-md">
                      <div className="text-3xl font-bold text-blue-500 mb-2">{info.yearsOfExperience}+</div>
                      <div className="text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg shadow-md">
                      <div className="text-3xl font-bold text-purple-500 mb-2">3.84</div>
                      <div className="text-muted-foreground">GPA</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg shadow-md">
                      <div className="text-3xl font-bold text-green-500 mb-2">58+</div>
                      <div className="text-muted-foreground">Students Mentored</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg shadow-md">
                      <div className="text-3xl font-bold text-orange-500 mb-2">6</div>
                      <div className="text-muted-foreground">Major Projects</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-primary shadow-2xl">
                      <img src={info.profilePhoto} alt="Ashwin Nair" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                      <FaCode className="text-4xl text-white" />
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="bg-card rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">My Interests</h3>
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center gap-3 px-4 py-2 bg-muted rounded-lg"><FaChess className="text-2xl text-blue-500" /><span>Chess Enthusiast</span></div>
                  <div className="flex items-center gap-3 px-4 py-2 bg-muted rounded-lg"><SiLeetcode className="text-2xl text-yellow-600" /><span>Problem Solving (DSA)</span></div>
                  <div className="flex items-center gap-3 px-4 py-2 bg-muted rounded-lg"><FaChalkboardTeacher className="text-2xl text-green-500" /><span>Teaching & Mentoring</span></div>
                  <div className="flex items-center gap-3 px-4 py-2 bg-muted rounded-lg"><FaCloud className="text-2xl text-purple-500" /><span>Cloud Computing</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-4xl font-bold text-center mb-4">Featured <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span></h2>
              <p className="text-center text-muted-foreground mb-12">Some of my recent work in cloud, AI, and full-stack development</p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['all', 'cloud', 'fullstack', 'ai'].map((filter) => (
                  <button key={filter} onClick={() => setProjectFilter(filter)} className={`px-6 py-2 rounded-lg font-semibold transition-all ${projectFilter === filter ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'bg-muted hover:bg-muted/80'}`}>
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <motion.div key={project.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} whileHover={{ y: -10 }} transition={{ duration: 0.3 }} className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"><FaRocket className="text-6xl text-white opacity-50" /></div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold">{project.name}</h3>
                        {project.featured && <span className="px-2 py-1 bg-yellow-400 text-yellow-900 text-xs rounded-full">Featured</span>}
                      </div>
                      <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full">{tech}</span>
                        ))}
                        {project.technologies.length > 4 && <span className="px-3 py-1 bg-muted text-xs rounded-full">+{project.technologies.length - 4}</span>}
                      </div>
                      <div className="flex gap-3">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2"><FaGithub /> Code</a>
                        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"><FaRocket /> Demo</a>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-4xl font-bold text-center mb-12">Work <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Experience</span></h2>
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
                {experiences.map((exp, index) => (
                  <motion.div key={exp.id} initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-0'}`}>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div className="bg-card rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold">{exp.role}</h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">{exp.period}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 justify-end"><FaMapMarkerAlt className="text-xs" /> {exp.location}</p>
                        </div>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground"><FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" /><span className="text-sm">{achievement}</span></li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full">{tech}</span>
                        ))}
                      </div>
                    </div>
                    </motion.div>
                  </Card3D>
                ))}
              </div>
              <div className="mt-16">
                <h3 className="text-3xl font-bold text-center mb-8">Education</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {education.map((edu, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-card rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        <FaGraduationCap className="text-3xl text-primary flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-bold">{edu.degree}</h4>
                          <p className="text-primary font-semibold">{edu.university}</p>
                          <p className="text-sm text-muted-foreground">{edu.location} • {edu.period}</p>
                          {edu.gpa && <p className="text-sm font-semibold text-green-500 mt-1">GPA: {edu.gpa}</p>}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, idx) => (
                          <span key={idx} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded-full">{course}</span>
                        ))}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
              </div>
              <div className="mt-16">
                <h3 className="text-3xl font-bold text-center mb-8">Achievements & Certifications</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {achievements.map((achievement, index) => (
                    <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-card rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                      {achievement.image ? (
                        <div className="flex flex-col items-center gap-4">
                          <img src={achievement.image} alt={achievement.title} className="w-32 h-32 object-contain" />
                          <div className="text-center">
                            <h4 className="text-lg font-bold">{achievement.title}</h4>
                            {achievement.date && <p className="text-sm text-muted-foreground mt-1">{achievement.date}</p>}
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-4">
                          <achievement.icon className="text-4xl text-yellow-500" />
                          <div>
                            <h4 className="text-lg font-bold">{achievement.title}</h4>
                            {achievement.description && <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-4xl font-bold text-center mb-12">Technical <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span></h2>
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Programming Languages</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {skills.languages.map((skill, index) => (
                    <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ scale: 1.05 }} className="bg-card rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
                      <skill.icon className="text-5xl mx-auto mb-3 text-primary" />
                      <p className="font-semibold mb-2">{skill.name}</p>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Frameworks & Libraries</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {skills.frameworks.map((skill, index) => (
                    <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ scale: 1.1 }} className="flex items-center gap-2 px-4 py-3 bg-card rounded-lg hover:shadow-lg transition-shadow">
                      <skill.icon className="text-2xl text-primary" />
                      <span className="font-semibold">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Databases</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {skills.databases.map((skill, index) => (
                    <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ scale: 1.1 }} className="flex items-center gap-2 px-4 py-3 bg-card rounded-lg hover:shadow-lg transition-shadow">
                      <skill.icon className="text-2xl text-green-500" />
                      <span className="font-semibold">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Cloud & DevOps</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {skills.cloud.map((skill, index) => (
                    <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.05 }} whileHover={{ scale: 1.1 }} className="flex items-center gap-2 px-4 py-3 bg-card rounded-lg hover:shadow-lg transition-shadow">
                      <skill.icon className="text-2xl text-orange-500" />
                      <span className="font-semibold">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mt-12 text-center">
                <motion.a href={info.leetcode} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-shadow">
                  <SiLeetcode className="text-2xl" />Active Problem Solver on LeetCode<FaArrowDown className="rotate-[-45deg]" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-4xl font-bold text-center mb-4">Get In <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Touch</span></h2>
              <p className="text-center text-muted-foreground mb-12">Have a project in mind or want to collaborate? Let's talk!</p>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 p-4 bg-card rounded-lg">
                      <FaEnvelope className="text-2xl text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-semibold">{info.email}</p>
                      </div>
                      <button onClick={copyEmail} className="ml-auto p-2 hover:bg-muted rounded-lg transition-colors"><FaCopy /></button>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-card rounded-lg">
                      <FaMapMarkerAlt className="text-2xl text-red-500" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-semibold">{info.location}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                  <div className="flex gap-4">
                    <a href={info.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-card rounded-lg hover:scale-110 transition-transform"><FaGithub className="text-3xl" /></a>
                    <a href={info.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-card rounded-lg hover:scale-110 transition-transform"><FaLinkedin className="text-3xl text-blue-600" /></a>
                    <a href={info.leetcode} target="_blank" rel="noopener noreferrer" className="p-4 bg-card rounded-lg hover:scale-110 transition-transform"><SiLeetcode className="text-3xl text-yellow-600" /></a>
                    <div className="p-4 bg-card rounded-lg hover:scale-110 transition-transform cursor-pointer"><FaChess className="text-3xl" /></div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Name</label>
                      <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Subject</label>
                      <input type="text" name="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="What's this about?" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Message</label>
                      <textarea name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Tell me about your project or idea..."></textarea>
                    </div>
                    <motion.button onClick={handleFormSubmit} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2">
                      <FaPaperPlane /> Send Message
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="bg-secondary text-secondary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{info.name}</h3>
                <p className="text-muted-foreground mb-4">Software Developer specializing in Cloud, AI, and Full-Stack Development</p>
                <div className="flex gap-4">
                  <a href={info.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaGithub className="text-2xl" /></a>
                  <a href={info.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><FaLinkedin className="text-2xl" /></a>
                  <a href={info.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><SiLeetcode className="text-2xl" /></a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item}><button onClick={() => scrollToSection(item.toLowerCase())} className="text-muted-foreground hover:text-foreground transition-colors">{item}</button></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Built With</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-muted rounded-full text-sm">Framer Motion</span>
                </div>
              </div>
            </div>
            <div className="border-t border-border pt-8 text-center">
              <p className="text-muted-foreground">© {new Date().getFullYear()} {info.name}. All rights reserved.</p>
              <p className="text-muted-foreground text-sm mt-2">Designed & Built with ❤️ by Ashwin Nair</p>
            </div>
          </div>
        </footer>

        <AnimatePresence>
          {showScrollTop && (
            <motion.button initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-shadow z-40">
              <FaArrowUp className="text-xl" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
