
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  transformation?: {
    before: string;
    after: string;
  };
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "David Wilson",
      role: "Member for 1 year",
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      quote: "StrengthHub completely transformed my approach to fitness. The trainers are knowledgeable and supportive, and the facilities are world-class. I've achieved results I never thought possible!",
      rating: 5,
      transformation: {
        before: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        after: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
      }
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      role: "Member for 8 months",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80",
      quote: "Joining StrengthHub was the best decision I've made for my health. The community is supportive, the trainers push you just enough, and I've lost 30 pounds in just 8 months!",
      rating: 5
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "Member for 2 years",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      quote: "As a former athlete, I have high standards for gyms. StrengthHub exceeds all expectations with their equipment, trainers, and atmosphere. It's more than a gym—it's a lifestyle.",
      rating: 4,
      transformation: {
        before: "https://images.unsplash.com/photo-1606889464198-fcb18894cf50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
        after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      }
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gym-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-gym-blue font-semibold mb-2">SUCCESS STORIES</h5>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">MEMBER TESTIMONIALS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from our members who have transformed their bodies and lives with StrengthHub.
            Their journeys inspire us every day.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left side: Testimonial */}
          <div className="lg:w-1/2 bg-gym-gray rounded-lg p-8 relative">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name} 
                className="w-24 h-24 rounded-full object-cover border-2 border-gym-red"
              />
              <div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < currentTestimonial.rating ? "fill-gym-red text-gym-red" : "text-gray-600"} 
                    />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-4">"{currentTestimonial.quote}"</blockquote>
                <div className="flex flex-col">
                  <span className="font-bold text-lg">{currentTestimonial.name}</span>
                  <span className="text-gym-blue text-sm">{currentTestimonial.role}</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-end space-x-2 mt-6">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-700 hover:bg-gym-gray"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-700 hover:bg-gym-gray"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right side: Transformation (if available) */}
          {currentTestimonial.transformation ? (
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="relative">
                    <img 
                      src={currentTestimonial.transformation.before} 
                      alt="Before transformation" 
                      className="w-full h-80 object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white py-1 px-4 rounded-tr-lg">
                      Before
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <img 
                      src={currentTestimonial.transformation.after} 
                      alt="After transformation" 
                      className="w-full h-80 object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 bg-gym-red text-white py-1 px-4 rounded-tr-lg">
                      After
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="lg:w-1/2 flex justify-center items-center">
              <div className="text-center p-8 bg-gym-gray/50 rounded-lg">
                <p className="text-xl font-poppins font-bold mb-4">Join StrengthHub Today</p>
                <p className="text-gray-400 mb-4">Start your transformation journey and become our next success story!</p>
                <button className="btn-primary">Get Started</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
