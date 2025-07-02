import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mzzbdqea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'riopray38@gmail.com',
      link: 'mailto:riopray38@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+62 858-4046-9673',
      link: 'tel:+6285840469673'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bantul, Yogyakarta, Indonesia',
      link: ''
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-px bg-primary-600 dark:bg-primary-400"></div>
            <span className="text-primary-600 dark:text-primary-400 font-medium tracking-wider uppercase text-sm">
              Get In Touch
            </span>
            <div className="w-8 h-px bg-primary-600 dark:bg-primary-400"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 dark:text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-300">
                      <Icon size={24} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 dark:text-white mb-1">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-dark-600 dark:text-dark-300">{info.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-6">
              <h4 className="font-bold text-dark-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/riopray_793?igsh=ZThrZ2d1dTVkeXd5&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center hover:bg-pink-200 dark:hover:bg-pink-800/50 transition-colors duration-300"
                >
                  <span className="text-pink-600 dark:text-pink-400 font-bold">IG</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <span className="text-gray-600 dark:text-gray-400 font-bold">GH</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/rio-prayoga?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors duration-300"
                >
                  <span className="text-blue-600 dark:text-blue-400 font-bold">LI</span>
                </a>
                <a
                  href="https://wa.me/6285840469673"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center hover:bg-green-200 dark:hover:bg-green-800/50 transition-colors duration-300"
                >
                  <span className="text-green-600 dark:text-green-400 font-bold">WA</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-dark-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-dark-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-dark-200 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <CheckCircle size={20} />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <AlertCircle size={20} />
                  <span>Oops! Something went wrong. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;