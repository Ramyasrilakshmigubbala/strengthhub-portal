
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gym-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Column */}
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                alt="About StrengthHub" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gym-red p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-5xl font-bold font-poppins">10+</p>
                <p className="text-sm uppercase font-medium">Years Experience</p>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="md:w-1/2">
            <h2 className="section-heading">ABOUT STRENGTHHUB</h2>
            <p className="text-gray-300 mb-6">
              Founded in 2013, StrengthHub has grown from a small local gym to become a premier fitness destination. 
              Our mission is to empower individuals to transform their lives through fitness, providing an unmatched 
              environment for achieving physical and mental well-being.
            </p>
            <p className="text-gray-300 mb-6">
              At StrengthHub, we believe that fitness is not just about looking good—it's about feeling strong, 
              confident, and capable in all aspects of life. Our approach combines cutting-edge equipment, 
              innovative training methodologies, and a supportive community atmosphere.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-gym-blue mr-2 mt-1 flex-shrink-0" size={20} />
                <span>State-of-the-art facilities</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-gym-blue mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Expert personal trainers</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-gym-blue mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Diverse group classes</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-gym-blue mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Nutrition guidance</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-gym-blue mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Luxury amenities</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-gym-blue mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Community events</span>
              </div>
            </div>
            
            <Link to="/about" className="btn-primary inline-flex">
              Learn More <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
