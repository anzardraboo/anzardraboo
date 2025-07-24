import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Download, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with tech pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('/src/assets/tech-background.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-cyan-400">AD</span>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Mohammad <span className="text-cyan-400">Anzar</span> Draboo
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-300 mb-6">
            Senior Data Scientist & AI Consultant
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforming Business Challenges into AI-Driven Solutions with 5+ Years of Excellence
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <span>Srinagar, J&K</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-cyan-400" />
            <span>anzardraboo@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-cyan-400" />
            <span>9796177933</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Button>
          <Button
            variant="outline"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="w-8 h-8 text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

