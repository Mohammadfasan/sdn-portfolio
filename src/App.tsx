import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Leaf, Award, Users, GraduationCap, Code, BarChart3, Droplets, Wind, Recycle, Menu, X, Download, ExternalLink, Github, Linkedin, MessageSquare } from 'lucide-react';
import profileImage from './assets/sathan.jpg'; 
import SadanPdf from './assets/CV.pdf'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState<number | null>(null);

  // Enhanced Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: 10 
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { 
      opacity: 0, 
      x: -100,
      skewX: 5 
    },
    visible: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: 100,
      skewX: -5 
    },
    visible: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const scaleUp = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: 180 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseGlow = {
    initial: { scale: 1, opacity: 0.7 },
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Mobile menu animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const projects = [
    {
      title: "Portable GHG Analyzer",
      description: "Developed an innovative portable device with multi-sensor integration (CO₂, CH₄, N₂O) for real-time greenhouse gas emission monitoring, contributing to climate change mitigation efforts.",
      tags: ["Climate Technology", "Environmental Monitoring", "IoT", "Data Analytics"],
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      title: "Eco-Conscious Dog Feed",
      description: "Created a sustainable solution by repurposing canteen food waste into safe, low-cost dog feed, reducing environmental waste while supporting animal shelters.",
      tags: ["Circular Economy", "Waste Management", "Sustainability", "Social Impact"],
      image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=500"
    }
  ];

  const skills = [
    { name: "Air Quality Monitoring", icon: Wind },
    { name: "Water Treatment", icon: Droplets },
    { name: "GIS (ArcGIS Pro)", icon: BarChart3 },
    { name: "Data Analysis", icon: Code },
    { name: "Solid Waste Management", icon: Recycle },
  ];

  const leadership = [
    {
      role: "Founder",
      organization: "9 WhatsApp A/L Study Groups",
      impact: "5000+ members",
      description: "Built educational community platforms reaching thousands of students"
    },
    {
      role: "Vice President",
      organization: "National Youth Corps Old Students Committee",
      impact: "Leadership",
      description: "Led organizational initiatives and community development programs"
    },
    {
      role: "Faculty Vice Batch Representative",
      organization: "University Muslim Majlish",
      impact: "Student Advocacy",
      description: "Represented student interests and facilitated academic communications"
    }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  // Body scroll control for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Backdrop click to close menu
  useEffect(() => {
    const handleBackdropClick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (isMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleBackdropClick);
    return () => document.removeEventListener('click', handleBackdropClick);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = SadanPdf;
    link.download = 'Saadhan_Faizal_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Fixed Navigation Bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-emerald-100"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer" 
              onClick={() => scrollToSection('home')}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Leaf size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">Saadhan Faizal</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="hidden md:flex items-center space-x-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                <Download size={16} />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors mobile-menu-button"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Content with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden bg-white border-t border-emerald-100 rounded-b-lg shadow-lg overflow-hidden mobile-menu-container"
            >
              <div className="py-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-6 py-3 text-base font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-emerald-600 bg-emerald-50 font-semibold'
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                {/* Download CV Button for Mobile */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="px-6 py-3 border-t border-emerald-100 mt-2"
                >
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={downloadCV}
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white w-full py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Download size={18} />
                    <span>Download CV</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section with Enhanced Animations */}
      <section id="home" className="bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 text-white py-24 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, 50, 0],
              rotate: [0, -180, -360]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full blur-3xl"
          ></motion.div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center justify-between"
          >
            {/* Profile Content */}
            <motion.div 
              variants={slideInLeft}
              className="lg:w-2/3 text-center lg:text-left mb-12 lg:mb-0"
            >
              <div className="mb-8">
                <motion.h1 
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                >
                  <span className="block">Saadhan</span>
                  <span className="block bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent">
                    Faizal
                  </span>
                </motion.h1>
                
                <motion.h2 
                  variants={fadeInUp}
                  className="text-xl md:text-2xl font-light mb-8 text-emerald-100 leading-relaxed"
                >
                  Environmental Technology Specialist | Climate Change Solutions Developer | 
                  <span className="block mt-2">Sustainability Innovation Leader</span>
                </motion.h2>
                
                <motion.p 
                  variants={fadeInUp}
                  className="text-lg text-emerald-100 mb-8 max-w-2xl leading-relaxed"
                >
                  Environmental Technology graduate passionate about developing innovative solutions for climate change mitigation. 
                  Experienced in greenhouse gas monitoring systems, waste-to-resource innovations, and sustainable technology development.
                </motion.p>

                {/* Social Links */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
                >
                  <motion.a 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/saadhan-faizal-54a545343" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </motion.a>
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </motion.button>
                </motion.div>

                {/* Contact Info */}
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-wrap justify-center lg:justify-start gap-6 text-emerald-100"
                >
                  {[
                    { icon: Phone, text: "+94762119447" },
                    { icon: Mail, text: "saadhanfaizal@gmail.com" },
                    { icon: MapPin, text: "Puttalam, Sri Lanka" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2"
                    >
                      <item.icon size={18} />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div 
              variants={scaleUp}
              className="lg:w-1/3 flex justify-center"
            >
              <div className="relative">
                <motion.div 
                  whileHover={{ scale: 1.05, rotateY: 10 }}
                  transition={{ duration: 0.5 }}
                  className="w-96 h-96 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-full flex items-center justify-center p-2 border-4 border-white/30 shadow-2xl overflow-hidden"
                >
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={profileImage}
                    alt="Saadhan Faizal Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div 
                  variants={floatingAnimation}
                  animate="animate"
                  className="absolute -top-8 -right-8 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Wind size={32} className="text-white" />
                </motion.div>
                <motion.div 
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 15, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Droplets size={24} className="text-white" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="about" 
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Professional Summary</h3>
            <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto w-24"></div>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.1)" }}
              className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-10 rounded-2xl shadow-xl border border-emerald-100 relative overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-emerald-500 rounded-full opacity-5"></div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8 relative z-10">
                {[
                  { icon: Award, value: "3.2 GPA", label: "Environmental Technology" },
                  { icon: Users, value: "5000+", label: "Community Members" },
                  { icon: Code, value: "2+", label: "Major Projects" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon size={32} className="text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2 text-xl">{stat.value}</h4>
                    <p className="text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-gray-700 relative z-10">
                {[
                  "BBST (Honours) Environmental Technology Graduate from the University of Colombo with specialized expertise in Climate Change Mitigation and Sustainability Solutions.",
                  "My technical expertise spans Greenhouse Gas Analysis, Waste-to-Resource Innovation, and Environmental Data Analytics.",
                  "Currently seeking opportunities to contribute to organizations driving the Green Transition and Net-Zero Emissions Goals."
                ].map((text, index) => (
                  <motion.p 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="hover:text-emerald-700 transition-colors duration-300"
                  >
                    {index === 0 ? <strong>{text}</strong> : text}
                  </motion.p>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 flex flex-wrap gap-3 relative z-10"
              >
                {["Environmental Technology", "Climate Change", "Sustainability", "GHG Monitoring", "Circular Economy", "Environmental Data Science", "Green Innovation"].map((keyword, index) => (
                  <motion.span 
                    key={keyword}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 rounded-full text-sm font-medium border border-emerald-200"
                  >
                    {keyword}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="projects" 
        className="py-20 bg-slate-50"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Key Projects</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative solutions addressing environmental challenges through technology and sustainability
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 overflow-hidden">
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-800 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.button 
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="skills" 
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Technical Expertise</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto mb-16">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -10,
                    rotateY: 180,
                    transition: { duration: 0.3 }
                  }}
                  className="group text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-emerald-200"
                >
                  <IconComponent size={56} className="text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-semibold text-gray-800">{skill.name}</p>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-2xl font-semibold text-gray-800 mb-8">Additional Skills</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {["Leadership", "Teamwork", "Content Writing", "Critical Thinking", "English & Tamil Proficiency"].map((skill, index) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Leadership Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="leadership" 
        className="py-20 bg-slate-50"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Leadership Experience</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mb-6"
                  >
                    <Users size={32} className="text-white" />
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{item.role}</h4>
                  <p className="text-lg text-emerald-600 font-semibold mb-4">{item.organization}</p>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 rounded-full text-sm font-medium"
                  >
                    {item.impact}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="education" 
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Education</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-2xl shadow-xl p-10 border border-emerald-100 relative overflow-hidden">
              <div className="absolute -left-20 -top-20 w-40 h-40 bg-emerald-500 rounded-full opacity-5"></div>
              <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-teal-500 rounded-full opacity-5"></div>
              
              <div className="flex items-start space-x-6 relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0"
                >
                  <GraduationCap size={32} className="text-white" />
                </motion.div>
                
                <div>
                  <h4 className="text-3xl font-bold text-gray-800 mb-2">BBST (Honours) Environmental Technology</h4>
                  <p className="text-xl text-emerald-600 font-semibold mb-4">University of Colombo</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-gray-600 mb-2"><strong>Duration:</strong> 2020 - 2023</p>
                      <p className="text-gray-600 mb-2"><strong>GPA:</strong> 3.2/4.0</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-2"><strong>Specialization:</strong> Climate Change & Sustainability</p>
                      <p className="text-gray-600"><strong>Status:</strong> Completed</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800">Key Achievements:</h5>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Developed innovative GHG monitoring solutions as part of final year project</li>
                      <li>Participated in sustainability-focused research and community projects</li>
                      <li>Gained comprehensive knowledge in environmental policy and technology</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="contact" 
        className="py-20 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold mb-4">Let's Connect</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-green-300 to-cyan-300 mx-auto"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h4 className="text-2xl font-bold mb-6">Get in Touch</h4>
                  <p className="text-emerald-100 leading-relaxed">
                    Interested in collaborating on environmental technology projects or discussing sustainability solutions? 
                    I'm always open to new opportunities and conversations about creating positive environmental impact.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "saadhanfaizal@gmail.com", href: "mailto:saadhanfaizal@gmail.com" },
                    { icon: Phone, label: "Phone", value: "+94762119447", href: "tel:+94762119447" },
                    { icon: MapPin, label: "Location", value: "Puttalam, Sri Lanka", href: "#" }
                  ].map((item, index) => (
                    <motion.a 
                      key={index}
                      href={item.href}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center">
                        <item.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{item.label}</p>
                        <p className="text-emerald-100">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/saadhan-faizal-54a545343", label: "LinkedIn" },
                    { icon: Github, href: "#", label: "GitHub" },
                    { icon: MessageSquare, href: "#", label: "Messenger" }
                  ].map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <h4 className="text-2xl font-bold mb-6">Send a Message</h4>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-green-300 transition-colors duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-green-300 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-green-300 transition-colors duration-300"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-400 to-cyan-400 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-white py-12"
      >
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Leaf size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">Saadhan Faizal</span>
            </motion.div>
            
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
              Environmental Technology Specialist dedicated to creating sustainable solutions for a better tomorrow. 
              Let's work together towards a greener, more sustainable future.
            </p>
            
            <div className="flex justify-center space-x-6 mb-6">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/saadhan-faizal-54a545343", label: "LinkedIn" },
                { icon: Mail, href: "mailto:saadhanfaizal@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:+94762119447", label: "Phone" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-t border-gray-800 pt-6"
            >
              <p className="text-gray-400">
                &copy; 2024 Saadhan Faizal. All rights reserved. 
                <span className="block mt-2 text-emerald-400">Building a Sustainable Future</span>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;