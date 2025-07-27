import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Users, Zap, Brain, BarChart3, Bot } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Banking AI/ML Solutions Suite",
      description: "Comprehensive AI/ML solutions for one of North India's largest banks including NPA prediction, cross-sell modeling, customer segmentation, dormant account detection, revenue forecasting, and credit risk scoring.",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
      technologies: ["Python", "AWS SageMaker", "AWS Glue", "QuickSight", "PySpark", "SQL"],
      achievements: [
        "Improved prediction accuracy by 35% for NPA detection",
        "Increased cross-sell conversion rates by 28%",
        "Reduced manual analysis time by 70%",
        "Enabled real-time decision making for leadership"
      ],
      category: "Enterprise AI"
    },
    {
      title: "Conversational AI & Chatbot Platform",
      description: "End-to-end conversational AI platform with FAQ bots and dynamic address change chatbots using cloud services for banking and customer service applications.",
      icon: Bot,
      color: "from-purple-500 to-pink-500",
      technologies: ["Google DialogFlow ES", "Amazon Lex", "NLP", "Python", "AWS Lambda"],
      achievements: [
        "Reduced customer service response time by 60%",
        "Handled 10,000+ customer queries daily",
        "Achieved 92% customer satisfaction rate",
        "Automated 80% of routine customer interactions"
      ],
      category: "Conversational AI"
    },
    {
      title: "Automated Reporting & Analytics Platform",
      description: "Built robust automated reporting infrastructure using scripting and scheduling tools, significantly reducing manual reporting efforts and ensuring timely delivery to stakeholders.",
      icon: BarChart3,
      color: "from-green-500 to-teal-500",
      technologies: ["Python", "Tableau", "Power BI", "SQL", "Azure", "Smartsheets"],
      achievements: [
        "Saved 210 monthly hours in manual reporting",
        "Improved TAT by 30% through key metrics implementation",
        "Automated 150+ man-hours per month of Excel tasks",
        "Standardized metrics across business verticals"
      ],
      category: "Business Intelligence"
    },
    {
      title: "Agentic AI Proof of Concept",
      description: "Led development of an innovative Agentic AI system using n8n/CrewAI for business development function, demonstrating advanced AI orchestration capabilities.",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      technologies: ["n8n", "CrewAI", "Python", "LLM", "API Integration", "Workflow Automation"],
      achievements: [
        "Improved response times by over 30%",
        "Reduced manual intervention by 65%",
        "Increased team productivity by 40%",
        "Demonstrated scalable AI orchestration"
      ],
      category: "Advanced AI"
    },
    {
      title: "Time Series Forecasting Engine",
      description: "Advanced forecasting system using statistical methods, machine learning, Facebook Prophet, and RNNs (LSTM/GRU) for sales and price prediction across multiple domains.",
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500",
      technologies: ["Python", "Facebook Prophet", "LSTM", "GRU", "Scikit-learn", "TensorFlow"],
      achievements: [
        "Achieved 95% forecasting accuracy",
        "Reduced forecasting errors by 45%",
        "Enabled proactive business planning",
        "Supported strategic decision making"
      ],
      category: "Predictive Analytics"
    },
    {
      title: "NLP Text Analytics Suite",
      description: "Comprehensive NLP solution leveraging algorithms like LDA, LSA for topic modeling, news scraping, and automated newsletter generation for business intelligence.",
      icon: Users,
      color: "from-cyan-500 to-blue-500",
      technologies: ["Python", "NLP", "LDA", "LSA", "NLTK", "spaCy", "Web Scraping"],
      achievements: [
        "Processed 100,000+ documents daily",
        "Generated automated weekly newsletters",
        "Extracted actionable insights from unstructured text",
        "Improved content discovery by 50%"
      ],
      category: "Natural Language Processing"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
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
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing impactful AI and data science solutions that drive business transformation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 border-slate-600 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 h-full group">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center flex-shrink-0`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 text-xs leading-relaxed flex items-start gap-2">
                          <TrendingUp className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Interested in collaborating on innovative AI and data science projects?
          </p>
          <Button
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Work Together
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

