
import React, { useEffect, useState } from 'react';
import { Users, Award, Dumbbell } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  endValue: number;
}

const Stat = ({ icon, value, label, suffix = '', endValue }: StatProps) => {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="text-gym-red mb-4">{icon}</div>
      <div className="text-4xl md:text-5xl font-bold mb-2 font-poppins">
        {value}{suffix}
      </div>
      <p className="text-gray-400 text-center">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const [membersCount, setMembersCount] = useState(0);
  const [trainersCount, setTrainersCount] = useState(0);
  const [equipmentCount, setEquipmentCount] = useState(0);

  useEffect(() => {
    const animateStats = () => {
      const membersInterval = setInterval(() => {
        setMembersCount(prev => {
          if (prev < 1000) return prev + 20;
          clearInterval(membersInterval);
          return 1000;
        });
      }, 20);

      const trainersInterval = setInterval(() => {
        setTrainersCount(prev => {
          if (prev < 25) return prev + 1;
          clearInterval(trainersInterval);
          return 25;
        });
      }, 80);

      const equipmentInterval = setInterval(() => {
        setEquipmentCount(prev => {
          if (prev < 150) return prev + 3;
          clearInterval(equipmentInterval);
          return 150;
        });
      }, 30);

      return () => {
        clearInterval(membersInterval);
        clearInterval(trainersInterval);
        clearInterval(equipmentInterval);
      };
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    });

    observer.observe(document.querySelector('.stats-section')!);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section bg-gym-gray py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Stat 
            icon={<Users size={40} />}
            value={membersCount}
            endValue={1000}
            label="Members Transformed"
            suffix="+"
          />
          <Stat 
            icon={<Award size={40} />}
            value={trainersCount}
            endValue={25}
            label="Certified Personal Trainers"
          />
          <Stat 
            icon={<Dumbbell size={40} />}
            value={equipmentCount}
            endValue={150}
            label="State-of-the-Art Equipment"
            suffix="+"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
