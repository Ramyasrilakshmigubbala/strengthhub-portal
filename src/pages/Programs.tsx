
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, Clock, Dumbbell, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProgramCardProps {
  title: string;
  description: string;
  category: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  image: string;
}

const ProgramCard = ({ title, description, category, duration, level, image }: ProgramCardProps) => {
  const levelColor = {
    'Beginner': 'bg-green-500',
    'Intermediate': 'bg-yellow-500',
    'Advanced': 'bg-red-500',
    'All Levels': 'bg-gym-blue'
  };

  return (
    <div className="card-gym overflow-hidden">
      <div className="relative h-56 mb-4 overflow-hidden rounded-md">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${levelColor[level]}`}>
            {level}
          </span>
        </div>
      </div>
      <span className="text-gym-blue text-sm font-medium">{category}</span>
      <h3 className="text-xl font-bold my-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
        <div className="flex items-center">
          <Clock size={16} className="mr-1" />
          <span>{duration}</span>
        </div>
      </div>
      <Link 
        to={`/programs/${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="text-gym-red hover:underline font-medium inline-flex items-center text-sm"
      >
        View Program Details <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

const Programs = () => {
  const programCategories = [
    { id: 'all', name: 'All Programs' },
    { id: 'strength', name: 'Strength & Conditioning' },
    { id: 'cardio', name: 'Cardio & HIIT' },
    { id: 'weightloss', name: 'Weight Loss' },
    { id: 'group', name: 'Group Classes' },
    { id: 'personal', name: 'Personal Training' },
    { id: 'specialty', name: 'Specialty Programs' },
  ];

  const programs = [
    {
      title: "Personal Training",
      description: "One-on-one customized training sessions with our certified experts to achieve your specific goals. Your trainer will design a program tailored to your needs and provide guidance every step of the way.",
      category: "Personal Training",
      duration: "Flexible Sessions",
      level: "All Levels" as const,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Group HIIT",
      description: "High-intensity interval training classes designed to boost your metabolism and burn calories efficiently. These energetic sessions combine cardio bursts with strength exercises.",
      category: "Group Classes",
      duration: "45 min sessions",
      level: "All Levels" as const,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Strength Foundation",
      description: "Build fundamental strength and proper form with this program focusing on major compound movements. Learn proper technique for squats, deadlifts, presses and more.",
      category: "Strength & Conditioning",
      duration: "8 weeks",
      level: "Beginner" as const,
      image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Total Transformation",
      description: "Comprehensive weight loss program combining training, nutrition, and lifestyle guidance for sustainable results. Includes weekly check-ins and adjustments based on your progress.",
      category: "Weight Loss",
      duration: "12 weeks",
      level: "All Levels" as const,
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    },
    {
      title: "Advanced Powerlifting",
      description: "Specialized strength program for experienced lifters looking to increase their squat, bench press, and deadlift numbers through periodized training and technique refinement.",
      category: "Specialty Programs",
      duration: "16 weeks",
      level: "Advanced" as const,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Cardio Conditioning",
      description: "Improve your cardiovascular endurance and overall fitness with this program that incorporates various cardio modalities and heart rate training zones.",
      category: "Cardio & HIIT",
      duration: "6 weeks",
      level: "Intermediate" as const,
      image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gym-dark text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-black">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Fitness Programs" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="text-center">
              <h5 className="text-gym-blue font-semibold mb-2">EXPERT TRAINING SOLUTIONS</h5>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
                OUR <span className="text-gym-red">PROGRAMS</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Find the perfect training program to match your fitness goals, experience level, and preferences.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-gym-dark">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="mb-12 overflow-x-auto pb-4">
              <div className="flex space-x-4 min-w-max">
                {programCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      category.id === 'all' 
                        ? 'bg-gym-red text-white' 
                        : 'bg-gym-gray text-white hover:bg-gym-red/20'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Programs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <ProgramCard 
                  key={index}
                  title={program.title}
                  description={program.description}
                  category={program.category}
                  duration={program.duration}
                  level={program.level}
                  image={program.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="bg-gym-gray rounded-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Not Sure Which Program Is Right For You?</h3>
                  <p className="text-gray-400">Schedule a free consultation with our fitness experts to find your perfect fit.</p>
                </div>
                <Link to="/contact" className="btn-primary whitespace-nowrap">
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
