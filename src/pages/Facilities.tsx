
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Dumbbell, Heart, Zap, Clock, Coffee, Droplets, Users, Tablets, Music } from 'lucide-react';

interface FacilityDetailProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const FacilityDetail = ({ icon, title, description, imageUrl }: FacilityDetailProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
      <div className={`order-2 md:order-1`}>
        <div className="flex items-start mb-4">
          <div className="bg-gym-gray p-3 rounded-lg mr-4">
            <div className="text-gym-red">{icon}</div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-poppins">{title}</h3>
        </div>
        <p className="text-gray-300 mb-6">{description}</p>
        <ul className="space-y-2">
          {Array(3).fill(0).map((_, i) => (
            <li key={i} className="flex items-center text-gray-400">
              <span className="w-2 h-2 bg-gym-red rounded-full mr-2"></span>
              <span>Premium feature {i + 1}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`order-1 md:order-2`}>
        <img src={imageUrl} alt={title} className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover" />
      </div>
    </div>
  );
};

const Facilities = () => {
  const facilities = [
    {
      icon: <Dumbbell size={32} />,
      title: "Strength Training Zone",
      description: "Our comprehensive strength training area features top-of-the-line equipment including Olympic lifting platforms, power racks, and a complete range of free weights from 2-150kg. Each zone is designed with ample space to ensure safety and comfort during your workouts.",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: <Zap size={32} />,
      title: "Cardio & HIIT Area",
      description: "Our expansive cardio section features the latest treadmills, ellipticals, rowing machines, and stair climbers, all equipped with personal entertainment systems. Adjacent to this is our dedicated HIIT zone with battle ropes, sleds, and plyometric equipment.",
      imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
      icon: <Heart size={32} />,
      title: "Recovery & Mobility Zone",
      description: "Recovery is as important as training. Our specialized recovery zone includes foam rolling stations, stretching areas with assisted stretch equipment, percussion therapy devices, and compression recovery systems to help you recover faster and prevent injuries.",
      imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: <Users size={32} />,
      title: "Group Fitness Studios",
      description: "Our specialized studios are designed for various group fitness activities, from high-energy HIIT classes to mind-body focused sessions like yoga and Pilates. Each space features premium flooring, audio systems, and all necessary equipment.",
      imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: <Droplets size={32} />,
      title: "Premium Locker Rooms",
      description: "Our luxurious locker rooms feature private changing areas, secure lockers with digital locks, rainfall showers with premium products, and grooming stations with everything you need to look your best after your workout.",
      imageUrl: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: <Coffee size={32} />,
      title: "Nutrition & Hydration Bar",
      description: "Our nutrition bar serves a variety of protein shakes, pre-workout drinks, smoothies, and healthy snacks. Our certified nutritionists can help you find the perfect supplement to complement your training regimen and dietary needs.",
      imageUrl: "https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
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
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
              alt="Gym Facilities" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="text-center">
              <h5 className="text-gym-blue font-semibold mb-2">WORLD-CLASS FACILITIES</h5>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
                STATE-OF-THE-ART <span className="text-gym-red">EQUIPMENT</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience fitness at its finest with our premium facilities designed to 
                elevate your workout and recovery experience.
              </p>
            </div>
          </div>
        </section>

        {/* Facilities Detail */}
        <section className="py-20 bg-gym-dark">
          <div className="container mx-auto px-4">
            {facilities.map((facility, index) => (
              <FacilityDetail 
                key={index}
                icon={facility.icon}
                title={facility.title}
                description={facility.description}
                imageUrl={facility.imageUrl}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Facilities;
