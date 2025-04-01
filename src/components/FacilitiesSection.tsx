
import React from 'react';
import { Dumbbell, Heart, Zap, Clock, Coffee, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FacilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FacilityCard = ({ icon, title, description }: FacilityCardProps) => {
  return (
    <div className="card-gym hover:scale-105 transition-transform duration-300">
      <div className="text-gym-red mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FacilitiesSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-gym-blue font-semibold mb-2">WORLD-CLASS FACILITIES</h5>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">TRAIN IN THE ULTIMATE GYM</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our state-of-the-art facilities provide everything you need for the perfect workout,
            from premium equipment to luxury amenities that elevate your fitness experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FacilityCard 
            icon={<Dumbbell size={36} />}
            title="Strength Training"
            description="Comprehensive free weights area with premium equipment for building strength and muscle."
          />
          <FacilityCard 
            icon={<Zap size={36} />}
            title="Cardio & HIIT"
            description="State-of-the-art cardio machines and a dedicated high-intensity interval training zone."
          />
          <FacilityCard 
            icon={<Heart size={36} />}
            title="Recovery Zone"
            description="Specialized recovery tools, foam rolling area, and stretching equipment for optimal recovery."
          />
          <FacilityCard 
            icon={<Coffee size={36} />}
            title="Nutrition Bar"
            description="Premium nutrition bar serving protein shakes, healthy snacks, and performance supplements."
          />
          <FacilityCard 
            icon={<Droplets size={36} />}
            title="Luxury Amenities"
            description="Premium locker rooms with towel service, saunas, and luxury shower products."
          />
          <FacilityCard 
            icon={<Clock size={36} />}
            title="24/7 Access"
            description="Secure member access to the gym facilities 24 hours a day, 7 days a week."
          />
        </div>

        <div className="text-center mt-12">
          <Link to="/facilities" className="btn-secondary inline-flex items-center">
            Explore All Facilities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
