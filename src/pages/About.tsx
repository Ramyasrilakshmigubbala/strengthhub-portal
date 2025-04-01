
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Award, Users, Clock, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gym-dark text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4">ABOUT <span className="text-gym-red">STRENGTHHUB</span></h1>
            <p className="text-xl text-gray-300">
              Where passion for fitness meets cutting-edge training and equipment.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-heading mb-6">OUR STORY</h2>
              <p className="mb-6 text-gray-300">
                Founded in 2013 by former professional athlete Michael Johnson, StrengthHub began as a small 
                personal training studio dedicated to bringing professional-level training methods to everyday fitness 
                enthusiasts. What started as a passion project quickly grew into a comprehensive fitness center known 
                for its innovative approach and outstanding results.
              </p>
              <p className="mb-6 text-gray-300">
                Over the past decade, we've expanded to a 25,000 square foot facility equipped with the latest 
                fitness technology and staffed by a team of certified fitness professionals committed to helping 
                our members achieve their goals. Our journey has been defined by continuous improvement and an 
                unwavering dedication to our community's health and wellness.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Check className="text-gym-blue mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Professional atmosphere</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-gym-blue mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Expert knowledge</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-gym-blue mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Personalized service</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-gym-blue mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Results-driven approach</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-gym-blue mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Supporting community</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-gym-blue mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Cutting-edge methods</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Gym facility" 
                className="rounded-lg h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                alt="Gym equipment" 
                className="rounded-lg h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Personal training" 
                className="rounded-lg h-64 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                alt="Group class" 
                className="rounded-lg h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 bg-gym-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-poppins font-bold mb-4">OUR MISSION & VALUES</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              At StrengthHub, we're guided by a set of core principles that shape our approach to fitness and community building.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg text-center">
              <div className="mx-auto w-16 h-16 bg-gym-red/20 rounded-full flex items-center justify-center mb-4">
                <Target size={32} className="text-gym-red" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-400">
                To empower individuals through physical strength, building confidence that extends beyond the gym into every aspect of life.
              </p>
            </div>
            
            <div className="bg-black p-8 rounded-lg text-center">
              <div className="mx-auto w-16 h-16 bg-gym-blue/20 rounded-full flex items-center justify-center mb-4">
                <Heart size={32} className="text-gym-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-gray-400">
                To create a community where fitness is accessible, enjoyable, and transformative for people of all backgrounds and fitness levels.
              </p>
            </div>
            
            <div className="bg-black p-8 rounded-lg text-center">
              <div className="mx-auto w-16 h-16 bg-gym-red/20 rounded-full flex items-center justify-center mb-4">
                <Award size={32} className="text-gym-red" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Values</h3>
              <p className="text-gray-400">
                Excellence, integrity, innovation, inclusivity, and unwavering commitment to our members' success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-poppins font-bold mb-4">LEADERSHIP TEAM</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Meet the dedicated professionals behind StrengthHub who bring decades of combined experience in fitness, business, and wellness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-gym text-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Michael Johnson" 
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">Michael Johnson</h3>
              <p className="text-gym-red mb-2">Founder & CEO</p>
              <p className="text-gray-400 text-sm">
                Former professional athlete with a passion for bringing elite training methods to everyone.
              </p>
            </div>
            
            <div className="card-gym text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80" 
                alt="Sarah Williams" 
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">Sarah Williams</h3>
              <p className="text-gym-red mb-2">Director of Training</p>
              <p className="text-gray-400 text-sm">
                Master trainer with expertise in programming and staff development.
              </p>
            </div>
            
            <div className="card-gym text-center">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="David Chen" 
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">David Chen</h3>
              <p className="text-gym-red mb-2">Operations Director</p>
              <p className="text-gray-400 text-sm">
                Business strategist ensuring seamless member experiences.
              </p>
            </div>
            
            <div className="card-gym text-center">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80" 
                alt="Amy Rodriguez" 
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">Amy Rodriguez</h3>
              <p className="text-gym-red mb-2">Nutrition Director</p>
              <p className="text-gray-400 text-sm">
                Certified nutritionist specializing in performance and transformation programming.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
