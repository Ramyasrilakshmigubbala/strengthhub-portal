
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gym-red/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-gym-blue/10 blur-3xl"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
            START YOUR FITNESS JOURNEY <span className="text-gym-red">TODAY</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 md:px-10">
            Join StrengthHub now and take the first step towards a stronger, healthier you. 
            Our expert trainers and state-of-the-art facilities are ready to help you transform your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join" className="btn-primary">
              Become a Member <ArrowRight size={20} className="ml-2 inline" />
            </Link>
            <Link to="/contact" className="btn-outline">
              Book a Free Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
