
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProgramCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProgramCard = ({ image, title, description, link }: ProgramCardProps) => {
  return (
    <div className="group relative rounded-lg overflow-hidden">
      {/* Image */}
      <div className="relative h-80">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 group-hover:pb-10">
        <h3 className="text-xl font-bold mb-2 font-poppins">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        <Link to={link} className="text-gym-red flex items-center text-sm font-semibold group-hover:underline">
          Learn More <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const ProgramsSection = () => {
  const programs = [
    {
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Personal Training",
      description: "One-on-one customized training sessions with our certified experts to achieve your specific goals.",
      link: "/programs/personal-training"
    },
    {
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Group Fitness",
      description: "Energetic group classes led by expert instructors, designed to motivate and challenge you.",
      link: "/programs/group-fitness"
    },
    {
      image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Strength & Conditioning",
      description: "Build strength, power, and muscular endurance through scientifically designed programs.",
      link: "/programs/strength-conditioning"
    },
    {
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      title: "Weight Loss",
      description: "Comprehensive programs combining training, nutrition, and lifestyle guidance for sustainable weight loss.",
      link: "/programs/weight-loss"
    }
  ];

  return (
    <section className="py-20 bg-gym-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-gym-blue font-semibold mb-2">OUR FITNESS PROGRAMS</h5>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">EXPERT TRAINING PROGRAMS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you're just starting out or looking to take your fitness to the next level, 
            our diverse range of programs is designed to help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <ProgramCard 
              key={index}
              image={program.image}
              title={program.title}
              description={program.description}
              link={program.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/programs" className="btn-primary inline-flex items-center">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
