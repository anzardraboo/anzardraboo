import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, TrendingUp, Users, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Consultant - Data & AI Engineering",
      company: "Deloitte",
      location: "Gurugram, India",
      period: "Jul '24 - Present",
      type: "Current",
      color: "from-green-500 to-emerald-500",
      achievements: [
        "Facilitated high-level consulting discussions with senior banking leadership to identify, prioritize, and finalize high-impact AI/ML use cases",
        "Designed and deployed end-to-end scalable AI/ML solutions on AWS for NPA prediction, cross-sell modeling, customer segmentation, and more",
        "Spearheaded the complete analytical delivery lifecycle for one of North India's largest banks",
        "Led source-to-target data mapping and ingestion using Medallion Architecture",
        "Developed high-value dashboards using Amazon QuickSight for strategic decision-making"
      ]
    },
    {
      title: "Technical Lead - Data Science & Artificial Intelligence",
      company: "iQuasar LLC",
      location: "Remote",
      period: "Oct '22 - Jul '24",
      type: "Previous",
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Founded and led the Data Science and AI vertical from the ground up",
        "Developed and executed strategic data initiatives by aligning cross-functional team objectives with business goals",
        "Led the consolidation of siloed data sources into a centralized RDBMS and implemented modern data warehouse on Azure",
        "Built robust automated reporting infrastructure, significantly reducing manual reporting efforts",
        "Led a team of 3 AI developers in delivering Agentic AI proof of concept, improving response times by 30%",
        "Achieved 20% increase in efficiency and resource utilization through process optimization"
      ]
    },
    {
      title: "Deputy Manager - Business Analytics",
      company: "Pearson",
      location: "Noida, IN",
      period: "Sep '21 - Oct '22",
      type: "Previous",
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Enforced data and reporting infrastructure using Tableau and SQL for real-time insights",
        "Improved Turnaround Time (TAT) by 30% through design and implementation of key metrics",
        "Standardized metrics across business verticals, saving 210 monthly hours in manual reporting",
        "Automated repetitive Excel tasks with Python, saving over 150 man-hours per month",
        "Exercised computer vision to extract information from documents"
      ]
    },
    {
      title: "Data Scientist",
      company: "Open Insights",
      location: "Pune, IN",
      period: "Mar '21 - Sep '21",
      type: "Previous",
      color: "from-orange-500 to-red-500",
      achievements: [
        "Leveraged ML capabilities for banking clients: Churn Prediction, Customer Acquisition using Lookalike Modelling",
        "Created end-to-end Conversational AI and FAQ Bots using Google DialogFlow ES and Amazon Lex",
        "Forecasted sales and price using statistical methods, ML, Facebook Prophet and RNNs (LSTM/GRU)",
        "Leveraged NLP algorithms like LDA, LSA for topic modeling to generate insights from text"
      ]
    },
    {
      title: "Data Analyst",
      company: "GoalWit Technologies",
      location: "New Delhi, IN",
      period: "Jul '17 - Aug '18",
      type: "Previous",
      color: "from-teal-500 to-green-500",
      achievements: [
        "Mined data from primary and secondary sources for easy interpretation and analysis",
        "Created dashboards for executive leadership using Tableau, effectively communicating trends and patterns",
        "Created comprehensive documentation for stakeholders to understand data analysis processes",
        "Leveraged AI/ML techniques to improve model performance"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
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
            Professional <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey of continuous growth and impactful contributions across leading organizations
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} border-4 border-slate-900 z-10`}>
                {exp.type === 'Current' && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse"></div>
                )}
              </div>

              {/* Content Card */}
              <Card className={`ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              } bg-gradient-to-br from-slate-800/80 to-slate-700/80 border-slate-600 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105`}>
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 font-medium">{exp.company}</span>
                      {exp.type === 'Current' && (
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium animate-pulse">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                          <TrendingUp className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

