
import React from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PlanFeature {
  feature: string;
  included: boolean;
}

interface PricingPlanProps {
  name: string;
  price: number;
  period: string;
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
}

const PricingPlan = ({ name, price, period, description, features, highlighted = false }: PricingPlanProps) => {
  return (
    <div className={`rounded-lg p-8 relative ${highlighted ? 'bg-gradient-to-br from-gym-gray to-black border-2 border-gym-red shadow-xl shadow-gym-red/20' : 'bg-gym-gray border border-gray-800'}`}>
      {highlighted && (
        <div className="absolute top-0 right-0 bg-gym-red text-white text-xs font-bold px-3 py-1 uppercase rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2 font-poppins">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold font-poppins">${price}</span>
        <span className="text-gray-400">/{period}</span>
      </div>
      <p className="text-gray-400 mb-6 text-sm">{description}</p>
      
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            {feature.included ? (
              <Check className="text-gym-blue mr-2 flex-shrink-0" size={18} />
            ) : (
              <X className="text-gray-500 mr-2 flex-shrink-0" size={18} />
            )}
            <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>{feature.feature}</span>
          </div>
        ))}
      </div>
      
      <Link 
        to="/join" 
        className={`w-full text-center py-3 rounded-md font-medium transition-all duration-300 ${
          highlighted 
            ? 'bg-gym-red hover:bg-gym-red/90 text-white' 
            : 'bg-transparent border border-white text-white hover:bg-white/10'
        }`}
      >
        Choose Plan
      </Link>
    </div>
  );
};

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: 29,
      period: "month",
      description: "Perfect for beginners looking to start their fitness journey",
      features: [
        { feature: "Gym Access (6am-10pm)", included: true },
        { feature: "Standard Equipment Access", included: true },
        { feature: "Locker Room Access", included: true },
        { feature: "2 Group Classes/Month", included: true },
        { feature: "Fitness Assessment", included: false },
        { feature: "Personal Training Sessions", included: false },
        { feature: "Nutrition Consultation", included: false },
      ]
    },
    {
      name: "Premium",
      price: 59,
      period: "month",
      description: "Our most popular plan for dedicated fitness enthusiasts",
      features: [
        { feature: "24/7 Gym Access", included: true },
        { feature: "Full Equipment Access", included: true },
        { feature: "Locker & Towel Service", included: true },
        { feature: "Unlimited Group Classes", included: true },
        { feature: "Quarterly Fitness Assessment", included: true },
        { feature: "2 Personal Training Sessions/Month", included: true },
        { feature: "Basic Nutrition Guidance", included: false },
      ],
      highlighted: true
    },
    {
      name: "Elite",
      price: 99,
      period: "month",
      description: "The ultimate fitness experience with exclusive premium benefits",
      features: [
        { feature: "24/7 Gym Access", included: true },
        { feature: "Premium Equipment Priority", included: true },
        { feature: "VIP Locker & Amenities", included: true },
        { feature: "Unlimited Group Classes", included: true },
        { feature: "Monthly Fitness Assessment", included: true },
        { feature: "4 Personal Training Sessions/Month", included: true },
        { feature: "Custom Nutrition Plan", included: true },
      ]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-gym-blue font-semibold mb-2">MEMBERSHIP OPTIONS</h5>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">CHOOSE YOUR PLAN</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect membership option that aligns with your fitness goals and budget.
            All plans include access to our state-of-the-art facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingPlan 
              key={index}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
            />
          ))}
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-gray-400 text-sm mb-6">
            All memberships include a one-time $49 initiation fee. Monthly contracts available with 
            no long-term commitment. We also offer family discounts and corporate partnership rates.
          </p>
          <Link to="/pricing" className="btn-secondary inline-flex items-center">
            View Detailed Pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
