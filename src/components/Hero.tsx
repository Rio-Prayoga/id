import React from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-900 dark:to-dark-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,theme(colors.primary.500),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,theme(colors.secondary.500),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-px bg-primary-600 dark:bg-primary-400"></div>
              <span className="text-primary-600 dark:text-primary-400 font-medium tracking-wider uppercase text-sm">
                Hello, I Am
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6 leading-tight">
              Rio Prayoga
            </h1>

            <div className="mb-6">
              <div className="text-xl sm:text-2xl text-primary-600 dark:text-primary-400 font-semibold mb-2">
                UI/UX Designer & Web Developer
              </div>
            </div>

            <p className="text-lg text-dark-600 dark:text-dark-300 mb-8 leading-relaxed max-w-lg">
              Information Systems student at Alma Ata University with a passion for creating 
              intuitive user experiences and modern web solutions. I blend design thinking 
              with technical expertise to build digital products that matter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/1Sa_ICVfDB3Ke0ogTBT87DxEoJBMW4duw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Download size={20} className="mr-2" />
                View Resume
              </a>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-dark-900 font-medium rounded-lg transition-all duration-300 hover:scale-105"
              >
                <ExternalLink size={20} className="mr-2" />
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-slide-up delay-150">
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>

              {/* Image Container */}
              <div className="relative bg-white dark:bg-dark-800 rounded-2xl p-4 shadow-2xl">
                <img
                  src="/img/rio.jpg"
                  alt="Rio Prayoga - UI/UX Designer"
                  className="w-full h-80 sm:h-96 lg:h-[450px] object-cover rounded-xl"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-800 rounded-lg p-4 shadow-lg animate-bounce-gentle">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-dark-700 dark:text-dark-200">
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} className="text-primary-600 dark:text-primary-400" />
      </button>
    </section>
  );
};

export default Hero;