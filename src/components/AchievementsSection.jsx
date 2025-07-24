import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Mic, Radio, GraduationCap, Users, Award, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Best Innovation Award",
      description: "Felicitated by the Government of J&K for innovative design & fabrication of wheelchair project",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      category: "Innovation",
      year: "2017",
      featured: true
    },
    {
      title: "All India Radio Interview",
      description: "Invited for a live interview on All India Radio discussing the innovative WheelChair Project",
      icon: Radio,
      color: "from-purple-500 to-pink-500",
      category: "Media Recognition",
      year: "2017",
      featured: true
    },
    {
      title: "Gold Medal - Academic Excellence",
      description: "Awarded Gold Medal for outstanding academic proficiency and performance",
      icon: Medal,
      color: "from-yellow-400 to-yellow-600",
      category: "Academic",
      year: "2017",
      featured: true
    },
    {
      title: "MBA with Merit",
      description: "Graduated MBA in Business Analytics from Liverpool Business School with Merit distinction",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
      category: "Academic",
      year: "2023"
    },
    {
      title: "M.Tech with Distinction",
      description: "Completed M.Tech in Artificial Intelligence from NMIMS Mumbai with Distinction",
      icon: GraduationCap,
      color: "from-green-500 to-teal-500",
      category: "Academic",
      year: "2020"
    },
    {
      title: "B.E with Distinction",
      description: "Graduated B.E in Mechanical Engineering from University of Kashmir with Distinction",
      icon: GraduationCap,
      color: "from-indigo-500 to-purple-500",
      category: "Academic",
      year: "2017"
    }
  ];

  const teachingRoles = [
    {
      role: "Adjunct Faculty - Data Science",
      institution: "IMS ProSchool",
      icon: Users,
      color: "from-cyan-500 to-blue-500"
    },
    {
      role: "Visiting Faculty - Machine Learning & Business Analytics",
      institution: "National Institute of Technology, Srinagar",
      icon: Users,
      color: "from-green-500 to-teal-500"
    },
    {
      role: "Visiting Faculty - Business Analytics",
      institution: "Central University of Kashmir",
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      role: "Evaluator - Data Science",
      institution: "Relevel by Unacademy",
      icon: Award,
      color: "from-orange-500 to-red-500"
    },
    {
      role: "Guest Speaker - AI & Data Science",
      institution: "NIIT",
      icon: Mic,
      color: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Achievements & <span className="text-cyan-400">Recognition</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition for innovation, academic excellence, and contributions to the data science community
          </p>
        </motion.div>

        {/* Featured Achievements */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <Star className="w-6 h-6 text-yellow-400" />
            Featured Achievements
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.filter(achievement => achievement.featured).map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 border-slate-600 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 h-full ring-2 ring-yellow-400/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-medium">
                          {achievement.category}
                        </span>
                        <div className="text-gray-400 text-sm mt-1">{achievement.year}</div>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3">{achievement.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                    
                    <div className="mt-4 flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-medium">Featured Achievement</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            Academic Excellence
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.filter(achievement => !achievement.featured).map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 border-slate-600 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                        <achievement.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white">{achievement.title}</h4>
                        <span className="text-gray-400 text-sm">{achievement.year}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Teaching & Speaking Engagements */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <Users className="w-6 h-6 text-green-400" />
            Teaching & Speaking Engagements
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 border-slate-600 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${role.color} flex items-center justify-center flex-shrink-0`}>
                        <role.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">{role.role}</h4>
                        <p className="text-green-400 text-sm font-medium">{role.institution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600"
        >
          <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Driven by Excellence and Innovation
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            These achievements reflect my commitment to pushing boundaries, sharing knowledge, and making meaningful contributions 
            to the data science and AI community. I believe in the power of innovation to create positive impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;

