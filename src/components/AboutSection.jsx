import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
  const stats = [
    { icon: TrendingUp, label: "Years Experience", value: "5+" },
    { icon: Users, label: "Projects Delivered", value: "50+" },
    { icon: Award, label: "Certifications", value: "10+" },
    { icon: GraduationCap, label: "Advanced Degrees", value: "2" },
  ];

  const education = [
    {
      degree: "MBA - Business Analytics",
      institution: "Liverpool Business School, Liverpool, UK",
      period: "Feb '21 - Feb '23",
      grade: "Merit",
      color: "from-purple-500 to-pink-500"
    },
    {
      degree: "M.TECH - Artificial Intelligence",
      institution: "Narsee Monjee Institute Of Management Studies, Mumbai, IN",
      period: "Aug '18 - Jun '20",
      grade: "Distinction",
      color: "from-blue-500 to-cyan-500"
    },
    {
      degree: "B.E - Mechanical Engineering",
      institution: "University of Kashmir, Srinagar, IN",
      period: "Jan '13 - Aug '17",
      grade: "Distinction",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Results-oriented Senior Consultant with <span className="text-cyan-400 font-semibold">5 years of experience</span> delivering 
                scalable data science and machine learning solutions for clients across industries. I specialize in translating 
                complex business problems into actionable AI-driven strategies, with end-to-end ownership from problem framing 
                to model deployment.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Proficient in <span className="text-blue-400 font-semibold">Python, SQL, and R</span>, with strong hands-on expertise in 
                <span className="text-cyan-400 font-semibold"> AWS, Azure Data Services</span>, and scalable data architectures. 
                I'm adept at building ML models for predictive analytics, segmentation, forecasting, and recommendation systems.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Skilled in stakeholder engagement, Agile delivery, and presenting technical findings to C-level executives 
                through compelling visualizations. I have a proven ability to lead cross-functional teams, mentor junior 
                resources, and drive measurable impact aligned with client goals.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-4 rounded-xl border border-slate-600 hover:border-cyan-400/50 transition-colors duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center flex-shrink-0`}>
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                          <p className="text-gray-300 text-sm mb-2">{edu.institution}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400 text-sm">{edu.period}</span>
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                              {edu.grade}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

