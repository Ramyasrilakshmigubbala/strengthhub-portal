
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gym-dark text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-black">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
              alt="Contact Us" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="text-center">
              <h5 className="text-gym-blue font-semibold mb-2">GET IN TOUCH</h5>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
                CONTACT <span className="text-gym-red">US</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Have questions? Our team is here to help you with anything you need.
                Reach out to us through any channel below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Details & Form */}
        <section className="py-20 bg-gym-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8 font-poppins">Get In Touch</h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start">
                    <div className="bg-gym-gray p-3 rounded-lg mr-4">
                      <MapPin className="text-gym-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Our Location</h3>
                      <p className="text-gray-400">123 Fitness Street, Gym City, 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gym-gray p-3 rounded-lg mr-4">
                      <Phone className="text-gym-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Phone Number</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gym-gray p-3 rounded-lg mr-4">
                      <Mail className="text-gym-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email Address</h3>
                      <p className="text-gray-400">info@strengthhub.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gym-gray p-3 rounded-lg mr-4">
                      <Clock className="text-gym-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
                      <p className="text-gray-400">Monday - Friday: 6am - 10pm</p>
                      <p className="text-gray-400">Weekends: 8am - 8pm</p>
                    </div>
                  </div>
                </div>
                
                {/* Map Embed */}
                <div className="rounded-lg overflow-hidden h-80">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.93463879851!2d-74.00598120592329!3d40.71277555446898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Manhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1630603979222!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gym Location"
                  />
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8 font-poppins">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full bg-gym-gray text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gym-red" 
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full bg-gym-gray text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gym-red" 
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-gym-gray text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gym-red" 
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <select 
                      id="subject" 
                      className="w-full bg-gym-gray text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gym-red"
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="personal-training">Personal Training</option>
                      <option value="facilities">Facilities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full bg-gym-gray text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gym-red" 
                      placeholder="Your message"
                    />
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="btn-primary flex items-center justify-center w-full"
                    >
                      Send Message <Send size={18} className="ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
