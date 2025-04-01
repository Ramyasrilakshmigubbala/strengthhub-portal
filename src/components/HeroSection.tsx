
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-in-up">
          <h5 className="text-gym-blue font-semibold mb-2 md:text-lg">WELCOME TO STRENGTHHUB</h5>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-white mb-4 leading-tight">
            TRANSFORM YOUR BODY, <br />
            <span className="text-gym-red">TRANSFORM YOUR LIFE</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-8">
            Join the ultimate fitness experience with state-of-the-art equipment, 
            expert trainers, and a motivating community to help you achieve your fitness goals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/join" className="btn-primary">
              Join Now <ArrowRight size={20} className="ml-2 inline" />
            </Link>
            <Link to="/programs" className="btn-outline">
              Explore Programs
            </Link>
            <Link to="/pricing" className="btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full mt-2 animate-float"></div>
        </div>
        <span className="text-white mt-2 text-sm font-medium">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
