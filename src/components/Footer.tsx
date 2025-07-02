import React from 'react';
import { Heart, Mail, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/riopray_793?igsh=ZThrZ2d1dTVkeXd5&utm_source=qr',
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    {
      icon: Github,
      href: '#',
      label: 'GitHub',
      color: 'hover:text-gray-600'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/rio-prayoga?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/6285840469673',
      label: 'WhatsApp',
      color: 'hover:text-green-500'
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Rio Prayoga</h3>
            <p className="text-dark-300 leading-relaxed mb-6 max-w-md">
              UI/UX Designer & Web Developer passionate about creating digital experiences 
              that make a difference. Based in Yogyakarta, Indonesia.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-400 ${social.color} hover:bg-dark-700 transition-all duration-300 hover:scale-110`}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <a
                  href="mailto:rioprayoga@example.com"
                  className="text-dark-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                >
                  riopray38@gmail.com
                </a>
              </div>
              <div className="text-dark-300 text-sm">
                <p>Bantul, Yogyakarta</p>
                <p>Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-dark-800 pt-8 mt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <p className="text-dark-300 mb-4">Subscribe to get the latest updates on my work and projects.</p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              />
              <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-dark-400 text-sm">
              © {currentYear} Rio Prayoga. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;