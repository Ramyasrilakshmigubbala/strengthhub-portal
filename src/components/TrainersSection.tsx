
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TrainerCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

const TrainerCard = ({ image, name, role, bio, socialLinks }: TrainerCardProps) => {
  return (
    <div className="card-gym overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden h-72 rounded-lg mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Social Links */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gym-blue transition-colors p-2 bg-black/50 rounded-full">
              <Facebook size={20} />
            </a>
          )}
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gym-blue transition-colors p-2 bg-black/50 rounded-full">
              <Instagram size={20} />
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gym-blue transition-colors p-2 bg-black/50 rounded-full">
              <Twitter size={20} />
            </a>
          )}
        </div>
      </div>
      
      {/* Info */}
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-gym-red font-medium mb-2">{role}</p>
      <p className="text-gray-400 text-sm">{bio}</p>
    </div>
  );
};

const TrainersSection = () => {
  const trainers = [
    {
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      name: "Alex Johnson",
      role: "Head Strength Coach",
      bio: "Former professional athlete with 10+ years of coaching experience. Specializes in strength training and athletic performance.",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        twitter: "#"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1606889464198-fcb18894cf50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      name: "Sarah Martinez",
      role: "Nutrition Specialist",
      bio: "Certified nutritionist with expertise in meal planning, weight management, and sports nutrition for optimal performance.",
      socialLinks: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1487&q=80",
      name: "Michael Chen",
      role: "HIIT Specialist",
      bio: "Renowned for his high-energy classes and transformative HIIT programs. Certified in multiple training disciplines.",
      socialLinks: {
        facebook: "#",
        instagram: "#"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "Jessica Parker",
      role: "Yoga & Recovery Coach",
      bio: "Specialized in yoga, mobility, and recovery techniques to enhance performance and prevent injuries.",
      socialLinks: {
        instagram: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section className="py-20 bg-gym-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-gym-blue font-semibold mb-2">EXPERT GUIDANCE</h5>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">MEET OUR TRAINERS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our certified fitness professionals are dedicated to helping you achieve your goals
            with personalized guidance, expertise, and motivation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <TrainerCard 
              key={index}
              image={trainer.image}
              name={trainer.name}
              role={trainer.role}
              bio={trainer.bio}
              socialLinks={trainer.socialLinks}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/trainers" className="btn-secondary inline-flex items-center">
            View All Trainers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
