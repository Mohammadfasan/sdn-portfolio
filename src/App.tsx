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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = SadanPdf;
    link.download = 'Saadhan_Faizal_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Enhanced Navigation Bar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-emerald-100"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Enhanced Logo */}
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                rotateY: 180,
                transition: { duration: 0.6 }
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center"
              >
                <Leaf size={24} className="text-white" />
              </motion.div>
              <span className="text-xl font-bold text-gray-800">Saadhan Faizal</span>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ 
                    scale: 1.1,
                    y: -2,
                    textShadow: "0px 0px 8px rgb(5 150 105)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg"
                      style={{ borderRadius: 8 }}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button 
                onClick={downloadCV}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 25px -5px rgba(5, 150, 105, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg overflow-hidden group"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-500"
                  initial={false}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <Download size={16} className="relative z-10" />
                <span className="relative z-10">Download CV</span>
              </motion.button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Enhanced Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 border-t border-emerald-100">
                  <div className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                      <motion.button
                        key={item.id}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: navItems.indexOf(item) * 0.1 }}
                        whileHover={{ 
                          x: 10,
                          scale: 1.02,
                          backgroundColor: "rgba(5, 150, 105, 0.1)"
                        }}
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                          activeSection === item.id
                            ? 'text-emerald-600 bg-emerald-50'
                            : 'text-gray-600'
                        }`}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                    <motion.button 
                      onClick={downloadCV}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-3 rounded-lg mt-4"
                    >
                      <Download size={16} />
                      <span>Download CV</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 text-white py-24 pt-32 relative overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 opacity-10"
        >
          <motion.div 
            variants={pulseGlow}
            initial="initial"
            animate="animate"
            className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            variants={pulseGlow}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
            className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full blur-3xl"
          ></motion.div>
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Enhanced Profile Content */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:w-2/3 text-center lg:text-left mb-12 lg:mb-0"
            >
              <motion.div variants={itemVariants} className="mb-8">
               
                
                <motion.h1 
                  variants={itemVariants} 
                  className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                >
                  <motion.span 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="block"
                  >
                    Saadhan
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="block bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent"
                  >
                    Faizal
                  </motion.span>
                </motion.h1>
                
                <motion.h2 
                  variants={itemVariants} 
                  className="text-xl md:text-2xl font-light mb-8 text-emerald-100 leading-relaxed"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Environmental Technology Specialist | Climate Change Solutions Developer | 
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="block mt-2"
                  >
                    Sustainability Innovation Leader
                  </motion.span>
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants} 
                  className="text-lg text-emerald-100 mb-8 max-w-2xl leading-relaxed"
                >
                  Environmental Technology graduate passionate about developing innovative solutions for climate change mitigation. 
                  Experienced in greenhouse gas monitoring systems, waste-to-resource innovations, and sustainable technology development.
                </motion.p>

                {/* Enhanced Social Links */}
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  <motion.a 
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)"
                    }}
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
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </motion.button>
                </motion.div>

                {/* Enhanced Contact Info */}
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-6 text-emerald-100">
                  {[
                    { icon: Phone, text: "+94762119447" },
                    { icon: Mail, text: "saadhanfaizal@gmail.com" },
                    { icon: MapPin, text: "Puttalam, Sri Lanka" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <item.icon size={18} />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced Profile Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="lg:w-1/3 flex justify-center"
            >
              <div className="relative">
                <motion.div 
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    transition: { duration: 0.5 }
                  }}
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
                
                {/* Enhanced Floating Elements */}
                <motion.div 
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                  className="absolute -top-8 -right-8 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Wind size={32} className="text-white" />
                </motion.div>
                <motion.div 
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 1 }}
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Droplets size={24} className="text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-bold text-gray-800 mb-4 cursor-default"
            >
              Professional Summary
            </motion.h3>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"
            ></motion.div>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(5, 150, 105, 0.25)"
              }}
              className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-10 rounded-2xl shadow-xl border border-emerald-100 relative overflow-hidden"
            >
              <motion.div 
                initial={{ rotate: 45, scale: 2, opacity: 0.1 }}
                whileInView={{ rotate: 0, scale: 1, opacity: 0.05 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute -right-20 -top-20 w-40 h-40 bg-emerald-500 rounded-full"
              ></motion.div>
              
              <motion.div 
                variants={containerVariants}
                className="grid md:grid-cols-3 gap-8 mb-8 relative z-10"
              >
                {[
                  { icon: Award, value: "3.2 GPA", label: "Environmental Technology" },
                  { icon: Users, value: "5000+", label: "Community Members" },
                  { icon: Code, value: "2+", label: "Major Projects" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <stat.icon size={32} className="text-white" />
                    </motion.div>
                    <h4 className="font-bold text-gray-800 mb-2 text-xl">{stat.value}</h4>
                    <p className="text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                variants={containerVariants}
                className="space-y-6 text-lg leading-relaxed text-gray-700 relative z-10"
              >
                {[
                  "BBST (Honours) Environmental Technology Graduate from the University of Colombo with specialized expertise in Climate Change Mitigation and Sustainability Solutions.",
                  "My technical expertise spans Greenhouse Gas Analysis, Waste-to-Resource Innovation, and Environmental Data Analytics.",
                  "Currently seeking opportunities to contribute to organizations driving the Green Transition and Net-Zero Emissions Goals."
                ].map((text, index) => (
                  <motion.p 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="hover:text-emerald-700 transition-colors duration-300 cursor-default"
                  >
                    {index === 0 ? <strong>{text}</strong> : text}
                  </motion.p>
                ))}
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                className="mt-8 flex flex-wrap gap-3 relative z-10"
              >
                {["Environmental Technology", "Climate Change", "Sustainability", "GHG Monitoring", "Circular Economy", "Environmental Data Science", "Green Innovation"].map((keyword, index) => (
                  <motion.span 
                    key={keyword}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      backgroundColor: "rgba(5, 150, 105, 0.2)",
                      color: "rgb(4, 120, 87)"
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 rounded-full text-sm font-medium border border-emerald-200 cursor-pointer transition-all duration-300"
                  >
                    {keyword}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
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
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                onHoverStart={() => setIsHovered(index)}
                onHoverEnd={() => setIsHovered(null)}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 relative"
              >
                <div className="relative overflow-hidden">
                  <motion.div 
                    animate={isHovered === index ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-64 overflow-hidden"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={isHovered === index ? { opacity: 1 } : { opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                  />
                  <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={isHovered === index ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    className="absolute bottom-4 left-4 right-4"
                  >
                    <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  </motion.div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <motion.span 
                        key={tag} 
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-800 rounded-full text-sm font-medium cursor-default"
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
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Technical Expertise</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"></div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto mb-16"
          >
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -10,
                    rotateZ: 5,
                    boxShadow: "0 20px 25px -5px rgba(5, 150, 105, 0.3)"
                  }}
                  className="group text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-emerald-200"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent size={56} className="text-emerald-600 mx-auto mb-4" />
                  </motion.div>
                  <p className="font-semibold text-gray-800">{skill.name}</p>
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h4 className="text-2xl font-semibold text-gray-800 mb-8">Additional Skills</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {["Leadership", "Teamwork", "Content Writing", "Critical Thinking", "English & Tamil Proficiency"].map((skill, index) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0, rotate: 180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    backgroundColor: "rgba(5, 150, 105, 0.2)",
                    color: "rgb(4, 120, 87)"
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full font-medium cursor-pointer transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Leadership Section */}
      <section id="leadership" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Leadership Experience</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"></div>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(5, 150, 105, 0.25)"
                }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="p-8">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mb-6"
                  >
                    <Users size={32} className="text-white" />
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{item.role}</h4>
                  <p className="text-lg font-semibold text-emerald-600 mb-2">{item.organization}</p>
                  <p className="text-sm font-medium text-gray-500 mb-4">{item.impact}</p>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Education</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto"></div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleUp}
            className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-2xl shadow-xl p-10 border border-emerald-100 relative overflow-hidden"
          >
            <motion.div 
              initial={{ rotate: 45, scale: 2, opacity: 0.1 }}
              whileInView={{ rotate: 0, scale: 1, opacity: 0.05 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute -left-20 -bottom-20 w-40 h-40 bg-teal-500 rounded-full"
            ></motion.div>
            
            <div className="relative z-10">
              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <GraduationCap size={32} className="text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">University of Colombo</h4>
                    <p className="text-lg font-semibold text-emerald-600 mb-1">BBST (Honours) Environmental Technology</p>
                    <p className="text-gray-600 mb-2">2020 - 2024 | GPA: 3.2</p>
                    <p className="text-gray-700 leading-relaxed">
                      Specialized in Environmental Technology with focus on climate change mitigation, 
                      sustainability solutions, and innovative environmental monitoring systems.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <Award size={32} className="text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">Professional Development</h4>
                    <p className="text-lg font-semibold text-emerald-600 mb-1">Continuous Learning & Skill Enhancement</p>
                    <p className="text-gray-700 leading-relaxed">
                      Actively engaged in professional development through workshops, online courses, 
                      and practical projects focused on environmental technology and sustainability innovation.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold mb-4">Get In Touch</h3>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to collaborate on environmental solutions? Let's connect and create sustainable impact together.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="space-y-8"
            >
              <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
              
              {[
                { icon: Phone, label: "Phone", value: "+94762119447" },
                { icon: Mail, label: "Email", value: "saadhanfaizal@gmail.com" },
                { icon: MapPin, label: "Location", value: "Puttalam, Sri Lanka" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <item.icon size={24} />
                  </motion.div>
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="opacity-90">{item.value}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="flex space-x-4 pt-4"
              >
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/saadhan-faizal-54a545343" },
                  { icon: Github, href: "#" },
                  { icon: MessageSquare, href: "#" }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -5,
                      backgroundColor: "rgba(255, 255, 255, 0.3)"
                    }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            >
              <h4 className="text-2xl font-bold mb-6">Send a Message</h4>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.input 
                    whileFocus={{ scale: 1.02, x: 5 }}
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-all duration-300"
                  />
                  <motion.input 
                    whileFocus={{ scale: 1.02, x: 5 }}
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-all duration-300"
                  />
                </div>
                <motion.input 
                  whileFocus={{ scale: 1.02, x: 5 }}
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-all duration-300"
                />
                <motion.textarea 
                  whileFocus={{ scale: 1.02, x: 5 }}
                  rows={5} 
                  placeholder="Your Message" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-all duration-300 resize-none"
                ></motion.textarea>
                <motion.button 
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-white text-emerald-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotateY: 180 }}
              className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Leaf size={32} />
            </motion.div>
            <h4 className="text-2xl font-bold mb-4">Saadhan Faizal</h4>
            <p className="text-gray-400 max-w-md mx-auto">
              Environmental Technology Specialist dedicated to creating sustainable solutions for a better future.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-400">
              © 2024 Saadhan Faizal. All rights reserved. Made with ❤️ for a sustainable future.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;