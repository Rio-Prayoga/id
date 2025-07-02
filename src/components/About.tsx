import React from 'react';
import { Shield, Palette, Code, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Cyber Security',
      description: 'Expertise in web security practices, secure coding, and vulnerability assessment. Focused on building secure web applications and protecting user data.',
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with strong focus on user experience. Proficient in Figma, user research, and design systems.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack development using modern technologies like React, Laravel, and Node.js. Building responsive and scalable web applications.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-px bg-primary-600 dark:bg-primary-400"></div>
            <span className="text-primary-600 dark:text-primary-400 font-medium tracking-wider uppercase text-sm">
              About Me
            </span>
            <div className="w-8 h-px bg-primary-600 dark:bg-primary-400"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-6">
            What I Do
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto leading-relaxed">
            I am an Information Systems student at Alma Ata University, Yogyakarta. With a passion for 
            technology and design, I focus on web development and UI/UX design. I believe that technology 
            should be accessible and provide a pleasant user experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up border border-dark-100 dark:border-dark-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className={service.color} />
                </div>
                
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">Learn more</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-slide-up">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">2+</div>
            <div className="text-dark-600 dark:text-dark-300 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">15+</div>
            <div className="text-dark-600 dark:text-dark-300 font-medium">Projects Done</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">10+</div>
            <div className="text-dark-600 dark:text-dark-300 font-medium">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">100%</div>
            <div className="text-dark-600 dark:text-dark-300 font-medium">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;