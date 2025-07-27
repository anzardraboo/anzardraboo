import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const CertificationsSection = () => {
  const certificationCategories = [
    {
      title: "Leadership & Business",
      color: "from-purple-500 to-pink-500",
      certifications: [
        {
          name: "Leadership & Emotional Intelligence",
          issuer: "Indian School of Business",
          year: "2023",
          type: "Professional"
        },
        {
          name: "AI Product Management Specialisation",
          issuer: "Duke University",
          year: "2022",
          type: "Specialization"
        }
      ]
    },
    {
      title: "Machine Learning & AI",
      color: "from-blue-500 to-cyan-500",
      certifications: [
        {
          name: "Machine Learning with Big Data",
          issuer: "UC San Diego",
          year: "2023",
          type: "Course"
        },
        {
          name: "Neural Networks & Deep Learning",
          issuer: "DeepLearning.ai",
          year: "2022",
          type: "Course"
        },
        {
          name: "AI for Medical Diagnosis",
          issuer: "DeepLearning.ai",
          year: "2022",
          type: "Course"
        },
        {
          name: "Mathematics for Machine Learning",
          issuer: "Imperial College London",
          year: "2021",
          type: "Specialization"
        }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      color: "from-green-500 to-teal-500",
      certifications: [
        {
          name: "AWS Certified Cloud Practitioner",
          issuer: "Amazon Web Services",
          year: "2025",
          type: "Professional",
          featured: true
        },
        {
          name: "AWS Machine Learning Engineer - Associate",
          issuer: "Amazon Web Services",
          year: "2025",
          type: "Professional",
          featured: true
        },
        {
          name: "Microsoft Certified: Fabric Data Engineer Associate",
          issuer: "Microsoft",
          year: "2025",
          type: "Professional",
          featured: true
        },
        {
          name: "AWS Certified AI Practitioner",
          issuer: "Amazon Web Services",
          year: "2025",
          type: "Professional",
          featured: true
        }
      ]
    },
    {
      title: "Data Science & Programming",
      color: "from-orange-500 to-red-500",
      certifications: [
        {
          name: "The Data Scientist's Toolbox",
          issuer: "The Johns Hopkins University",
          year: "2021",
          type: "Course"
        },
        {
          name: "Programming for Everybody",
          issuer: "University of Michigan",
          year: "2020",
          type: "Course"
        }
      ]
    },
    {
      title: "Cybersecurity & IoT",
      color: "from-indigo-500 to-purple-500",
      certifications: [
        {
          name: "Cybersecurity & Internet of Things",
          issuer: "University System of Georgia",
          year: "2022",
          type: "Course"
        }
      ]
    }
  ];

  const stats = [
    { label: "Total Certifications", value: "10+", icon: Award },
    { label: "Professional Certs", value: "3", icon: Star },
    { label: "Specializations", value: "2", icon: CheckCircle },
    { label: "Years Learning", value: "5+", icon: ExternalLink }
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative">
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
            Certifications & <span className="text-cyan-400">Credentials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development across cutting-edge technologies
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-cyan-400/50 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certifications by Category */}
        <div className="space-y-12">
          {certificationCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-600 to-transparent"></div>
              </div>

              {/* Certifications Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.certifications.map((cert, certIndex) => (
                  <motion.div
                    key={certIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (certIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <Card className={`bg-gradient-to-br from-slate-800/80 to-slate-700/80 border-slate-600 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 h-full ${
                      cert.featured ? 'ring-2 ring-cyan-400/30' : ''
                    }`}>
                      <CardContent className="p-6">
                        {/* Certification Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center flex-shrink-0`}>
                            {cert.featured ? (
                              <Star className="w-5 h-5 text-white" />
                            ) : (
                              <CheckCircle className="w-5 h-5 text-white" />
                            )}
                          </div>
                          <div className="text-right">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              cert.type === 'Professional' ? 'bg-green-500/20 text-green-400' :
                              cert.type === 'Specialization' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {cert.type}
                            </span>
                          </div>
                        </div>

                        {/* Certification Details */}
                        <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                          {cert.name}
                        </h4>
                        <p className="text-cyan-400 text-sm font-medium mb-2">
                          {cert.issuer}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-sm">{cert.year}</span>
                          {cert.featured && (
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-yellow-400 text-xs font-medium">Featured</span>
                            </div>
                          )}
                        </div>

                        {/* Verify Button */}
                        <div className="mt-4 pt-4 border-t border-slate-600">
                          <button className="w-full flex items-center justify-center gap-2 text-cyan-400 hover:text-white text-sm font-medium transition-colors duration-300">
                            <ExternalLink className="w-4 h-4" />
                            Verify Credential
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600"
        >
          <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Committed to Continuous Learning
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I am committed to staying at the forefront of innovation through continuous learning and professional growth. 
            These certifications reflect my dedication to maintaining technical excellence and deepening expertise in the dynamic landscape of AI and data science.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;

