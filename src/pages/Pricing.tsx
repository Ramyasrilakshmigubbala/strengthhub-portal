
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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

const Pricing = () => {
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
        { feature: "Access to Premium Areas", included: false },
        { feature: "Towel Service", included: false },
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
        { feature: "Access to Premium Areas", included: true },
        { feature: "Recovery Zone Access", included: false },
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
        { feature: "Access to Premium Areas", included: true },
        { feature: "Recovery Zone Access", included: true },
      ]
    }
  ];

  const faqItems = [
    {
      question: "Is there a joining fee?",
      answer: "Yes, all memberships include a one-time $49 initiation fee. This helps us cover administrative costs and your initial fitness assessment."
    },
    {
      question: "Can I cancel my membership at any time?",
      answer: "Yes, all our memberships are month-to-month with no long-term contracts. We require a 30-day notice for cancellations."
    },
    {
      question: "Do you offer family discounts?",
      answer: "Yes! We offer family packages that provide discounts for multiple members. Please inquire at the front desk for current family rates."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, we believe in transparent pricing. The monthly fee you see is what you pay, plus the one-time initiation fee for new members."
    },
    {
      question: "Can I freeze my membership?",
      answer: "Yes, members can freeze their membership for up to 3 months per year for medical reasons or extended travel at a reduced holding fee."
    },
    {
      question: "Do you offer student or military discounts?",
      answer: "Yes, we offer special rates for students and military personnel with valid ID. Please contact us for current discounted rates."
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
              src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Pricing" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="text-center">
              <h5 className="text-gym-blue font-semibold mb-2">MEMBERSHIP OPTIONS</h5>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
                CHOOSE YOUR <span className="text-gym-red">PLAN</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Select the perfect membership option that aligns with your fitness goals and budget.
                All plans include access to our state-of-the-art facilities.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-gym-dark">
          <div className="container mx-auto px-4">
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

            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Additional Membership Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-gym-gray p-8 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-4">Annual Membership</h3>
                  <p className="text-gray-400 mb-4">Save up to 20% with our annual payment option on any membership tier.</p>
                  <p className="text-lg font-bold">Save up to $200/year</p>
                </div>
                <div className="bg-gym-gray p-8 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-4">Day Pass</h3>
                  <p className="text-gray-400 mb-4">Try our facilities for a day without any commitment.</p>
                  <p className="text-lg font-bold">$15 per day</p>
                </div>
                <div className="bg-gym-gray p-8 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-4">Corporate Partnerships</h3>
                  <p className="text-gray-400 mb-4">Special rates for companies looking to improve employee wellness.</p>
                  <p className="text-lg font-bold">Contact for pricing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h5 className="text-gym-blue font-semibold mb-2">GOT QUESTIONS?</h5>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Find answers to common questions about our membership plans and policies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-gym-gray p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                  <p className="text-gray-400">{item.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">
                Still have questions? Our team is here to help you choose the perfect membership option.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
