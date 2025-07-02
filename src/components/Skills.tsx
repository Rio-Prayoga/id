import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Skills: React.FC = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Tech Startup',
      period: '2024 - Present',
      location: 'Yogyakarta, Indonesia',
      description: 'E-commerce website development using HTML, CSS, and JavaScript. Responsible for improving UX and debugging applications.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      title: 'UI/UX Designer',
      company: 'Freelance',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Design user interfaces for mobile applications with a focus on intuitive user experiences. Conduct user research and testing to improve designs.',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping']
    },
    {
      title: 'Project Manager',
      company: 'University Project',
      period: '2024',
      location: 'Yogyakarta, Indonesia',
      description: 'Lead a team in software development, manage project budgets and timelines, and communicate with clients to ensure their needs are met.',
      skills: ['Leadership', 'Agile', 'Communication', 'Planning']
    }
  ];

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'TypeScript']
    },
    {
      title: 'Backend',
      skills: ['Laravel', 'Node.js', 'Express.js', 'MySQL', 'PHP', 'CodeIgniter']
    },
    {
      title: 'Design',
      skills: ['Figma', 'Adobe XD', 'Photoshop', 'UI/UX Design', 'Prototyping', 'Wireframing']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'Linux']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-px bg-primary-600 dark:bg-primary-400"></div>
            <span className="text-primary-600 dark:text-primary-400 font-medium tracking-wider uppercase text-sm">
              Experience & Skills
            </span>
            <div className="w-8 h-px bg-primary-600 dark:bg-primary-400"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-6">
            My Journey & Expertise
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-8">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                  
                  <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <h4 className="text-lg font-bold text-dark-900 dark:text-white">{exp.title}</h4>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                        {exp.company}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-dark-600 dark:text-dark-300">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-dark-900 dark:text-white mb-4 flex items-center gap-2">
                    <Briefcase size={20} className="text-primary-600 dark:text-primary-400" />
                    {category.title}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="px-4 py-2 bg-gray-50 dark:bg-dark-800 rounded-lg text-center text-dark-700 dark:text-dark-200 font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg">
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                I have a strong foundation in web development technologies and design principles. 
                Currently expanding my knowledge in modern frameworks and cloud technologies to 
                build scalable and efficient applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;