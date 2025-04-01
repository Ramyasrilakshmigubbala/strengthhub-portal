
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface TrainerProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  certifications: string[];
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

const TrainerProfile = ({ image, name, role, bio, specialties, certifications, socialLinks }: TrainerProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 p-6 bg-gym-gray rounded-lg">
      <div className="md:col-span-1">
        <div className="relative overflow-hidden h-80 rounded-lg">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 p-4 bg-black/60">
            {socialLinks.facebook && (
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gym-blue transition-colors">
                <Facebook size={20} />
              </a>
            )}
            {socialLinks.instagram && (
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gym-blue transition-colors">
                <Instagram size={20} />
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gym-blue transition-colors">
                <Twitter size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="md:col-span-2">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 font-poppins">{name}</h2>
        <p className="text-gym-red font-medium mb-4">{role}</p>
        <p className="text-gray-300 mb-6">{bio}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Specialties</h3>
            <ul className="space-y-2">
              {specialties.map((specialty, index) => (
                <li key={index} className="flex items-center text-gray-400">
                  <span className="w-2 h-2 bg-gym-red rounded-full mr-2"></span>
                  <span>{specialty}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((certification, index) => (
                <li key={index} className="flex items-center text-gray-400">
                  <span className="w-2 h-2 bg-gym-blue rounded-full mr-2"></span>
                  <span>{certification}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <button className="btn-primary mt-6">
          Book a Session
        </button>
      </div>
    </div>
  );
};

const Trainers = () => {
  const trainers = [
    {
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      name: "Alex Johnson",
      role: "Head Strength Coach",
      bio: "With over 10 years of experience as a strength coach and a former competitive powerlifter, Alex specializes in helping clients build strength and muscle mass using evidence-based training methods. His passion for helping others reach their physical potential stems from his own transformation journey.",
      specialties: [
        "Strength Training",
        "Powerlifting",
        "Athletic Performance",
        "Muscle Building"
      ],
      certifications: [
        "NSCA Certified Strength & Conditioning Specialist",
        "USA Weightlifting Level 2 Coach",
        "Precision Nutrition Level 2",
        "First Aid & CPR Certified"
      ],
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
      bio: "Sarah is a registered dietitian with a master's degree in clinical nutrition. She helps clients develop sustainable eating habits that complement their training regimen. Her approach focuses on personalized nutrition strategies that fit each client's lifestyle, preferences, and goals.",
      specialties: [
        "Sports Nutrition",
        "Weight Management",
        "Meal Planning",
        "Competition Prep"
      ],
      certifications: [
        "Registered Dietitian (RD)",
        "Master's in Clinical Nutrition",
        "Sports Nutrition Specialist",
        "Precision Nutrition Level 2"
      ],
      socialLinks: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1487&q=80",
      name: "Michael Chen",
      role: "HIIT Specialist",
      bio: "Michael brings incredible energy and expertise to his high-intensity training sessions. With a background in competitive athletics and exercise physiology, he designs challenging workouts that maximize calorie burn and improve cardiovascular fitness. His clients love his motivating coaching style.",
      specialties: [
        "High-Intensity Interval Training",
        "Metabolic Conditioning",
        "Fat Loss",
        "Circuit Training"
      ],
      certifications: [
        "NASM Certified Personal Trainer",
        "TRX Suspension Training Specialist",
        "HIIT Certification",
        "BS in Exercise Science"
      ],
      socialLinks: {
        facebook: "#",
        instagram: "#"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      name: "Jessica Parker",
      role: "Yoga & Recovery Coach",
      bio: "Jessica is passionate about helping clients improve flexibility, mobility, and recovery through yoga and specialized stretching techniques. Her holistic approach incorporates mindfulness practices with physical training to promote overall wellness and prevent injuries.",
      specialties: [
        "Yoga for Athletes",
        "Mobility Training",
        "Recovery Techniques",
        "Stress Reduction"
      ],
      certifications: [
        "500-Hour Registered Yoga Teacher (RYT)",
        "Functional Range Conditioning Mobility Specialist",
        "Corrective Exercise Specialist",
        "Mindfulness-Based Stress Reduction Coach"
      ],
      socialLinks: {
        instagram: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gym-dark text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-black">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
              alt="Trainers" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="text-center">
              <h5 className="text-gym-blue font-semibold mb-2">EXPERT GUIDANCE</h5>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
                MEET OUR <span className="text-gym-red">TRAINERS</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our certified fitness professionals are dedicated to helping you achieve 
                your goals with personalized guidance and motivation.
              </p>
            </div>
          </div>
        </section>

        {/* Trainers Detail */}
        <section className="py-20 bg-gym-dark">
          <div className="container mx-auto px-4">
            {trainers.map((trainer, index) => (
              <TrainerProfile 
                key={index}
                image={trainer.image}
                name={trainer.name}
                role={trainer.role}
                bio={trainer.bio}
                specialties={trainer.specialties}
                certifications={trainer.certifications}
                socialLinks={trainer.socialLinks}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Trainers;
