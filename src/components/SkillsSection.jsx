import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Code, BarChart3, Database, Cpu, Zap, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Machine Learning Engineering", level: 95 },
        { name: "Natural Language Processing", level: 90 },
        { name: "Generative AI & LLM", level: 88 },
        { name: "Time Series Forecasting", level: 92 },
        { name: "Computer Vision", level: 85 }
      ]
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "AWS (S3, Glue, SageMaker)", level: 95 },
        { name: "AWS BedRock & Athena", level: 90 },
        { name: "Azure Data Services", level: 88 },
        { name: "Vertex AI | GCP Looker", level: 85 },
        { name: "AWS Data Lake Design", level: 92 }
      ]
    },
    {
      title: "Programming & Development",
      icon: Code,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Python | PySpark", level: 95 },
        { name: "SQL", level: 98 },
        { name: "R", level: 88 },
        { name: "JavaScript", level: 82 },
        { name: "Git & Version Control", level: 90 }
      ]
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Tableau", level: 95 },
        { name: "AWS QuickSight", level: 92 },
        { name: "Power BI", level: 90 },
        { name: "Plotly & Matplotlib", level: 88 },
        { name: "D3.js", level: 80 }
      ]
    },
    {
      title: "Big Data & Databases",
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Apache Spark", level: 90 },
        { name: "Hadoop Ecosystem", level: 85 },
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 92 },
        { name: "Data Warehousing", level: 95 }
      ]
    },
    {
      title: "Leadership & Management",
      icon: Globe,
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "Team Leadership", level: 95 },
        { name: "Project Management", level: 92 },
        { name: "Stakeholder Management", level: 90 },
        { name: "Agile Methodology", level: 88 },
        { name: "Process Reengineering", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
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
            Skills & <span className="text-cyan-400">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technical expertise across the entire data science and AI ecosystem
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 border-slate-600 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                          <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                            viewport={{ once: true }}
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Additional Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Docker", "Kubernetes", "Apache Airflow", "MLflow", "TensorFlow", "PyTorch", 
              "Scikit-learn", "Pandas", "NumPy", "Jupyter", "Git", "CI/CD", "REST APIs", 
              "GraphQL", "Elasticsearch", "Redis", "Apache Kafka", "Snowflake"
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-slate-700 to-slate-600 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:from-cyan-500 hover:to-blue-500 hover:text-white transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

