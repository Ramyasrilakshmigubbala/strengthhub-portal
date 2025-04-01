
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section className="py-20 bg-gym-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-gym-blue font-semibold mb-2">GET IN TOUCH</h5>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">CONTACT US</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions or ready to start your fitness journey? Reach out to our team for assistance
            or to schedule a free consultation with a personal trainer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side: Contact Form */}
          <div className="bg-black p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-poppins font-bold mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 bg-gym-gray border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gym-red"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 bg-gym-gray border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gym-red"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-3 bg-gym-gray border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gym-red"
                  placeholder="Subject"
                />
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full p-3 bg-gym-gray border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gym-red"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex justify-center items-center">
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>

          {/* Right side: Map and info */}
          <div className="space-y-8">
            {/* Map */}
            <div className="h-64 bg-gray-800 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3060343859087!2d-73.9877133!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1626378225265!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Gym location map"
              ></iframe>
            </div>

            {/* Contact Information */}
            <div className="bg-black p-8 rounded-lg shadow-lg space-y-6">
              <h3 className="text-2xl font-poppins font-bold mb-6">Contact Information</h3>
              
              <div className="flex items-start">
                <MapPin size={20} className="text-gym-red mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-400">123 Fitness Street, Gym City, 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={20} className="text-gym-red mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={20} className="text-gym-red mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-400">info@strengthhub.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={20} className="text-gym-red mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Working Hours</h4>
                  <p className="text-gray-400">Monday - Friday: 6am - 10pm</p>
                  <p className="text-gray-400">Weekends: 8am - 8pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
