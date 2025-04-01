
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Join = () => {
  const { toast } = useToast();
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    birthdate: '',
    membershipType: 'premium',
    paymentMethod: 'credit',
    emergencyContactName: '',
    emergencyContactPhone: '',
    agreeTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep(formStep + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevStep = () => {
    setFormStep(formStep - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Membership Application Submitted!",
      description: "We've received your application and will contact you soon.",
    });
    
    setFormStep(4); // Success step
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gym-dark text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-black">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Join Now" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="text-center">
              <h5 className="text-gym-blue font-semibold mb-2">START YOUR JOURNEY</h5>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
                JOIN <span className="text-gym-red">NOW</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Begin your fitness journey today. Fill out the form below to become a member
                of our premium fitness community.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-gym-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Progress Steps */}
              <div className="mb-12">
                <div className="flex justify-between items-center">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${formStep >= step ? 'bg-gym-red' : 'bg-gym-gray'}`}>
                        {formStep > step ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          <span>{step}</span>
                        )}
                      </div>
                      <span className="text-sm text-gray-400">
                        {step === 1 && "Personal Info"}
                        {step === 2 && "Membership"}
                        {step === 3 && "Emergency Contact"}
                        {step === 4 && "Complete"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative mt-4">
                  <div className="absolute h-1 bg-gym-gray top-0 left-0 right-0"></div>
                  <div 
                    className="absolute h-1 bg-gym-red top-0 left-0 transition-all duration-300"
                    style={{ width: `${(formStep - 1) * 33.33}%` }}
                  ></div>
                </div>
              </div>

              {/* Form Steps */}
              {formStep === 1 && (
                <form onSubmit={handleNextStep} className="bg-gym-gray p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-300 mb-2">First Name*</label>
                      <input 
                        type="text" 
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gym-dark text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gym-red" 
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-300 mb-2">Last Name*</label>
                      <input 
                        type="text" 
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gym-dark text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gym-red" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email*</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gym-dark text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gym-red" 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number*</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gym-dark text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gym-red" 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="address" className="block text-gray-300 mb-2">Address*</label>
                    <input 
                      type="text" 
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gym-dark text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gym-red" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="city" className="block text-gray-300 mb-2">City*</label>
                      <input 
                        type="text" 
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gym-dark text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gym-red" 
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-gray-300 mb-2">Zip Code*</label>
                      <input 
                        type="text" 
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gym-dark text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gym-red" 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="birthdate" className="block text-gray-300 mb-2">Date of Birth*</label>
                    <input 
                      type="date" 
                      id="birthdate"
                      name="birthdate"
                      value={formData.birthdate}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gym-dark text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gym-red" 
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <button type="submit" className="btn-primary">
                      Next Step
                    </button>
                  </div>
                </form>
              )}
              
              {formStep === 2 && (
                <form onSubmit={handleNextStep} className="bg-gym-gray p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6">Membership Selection</h2>
                  
                  <div className="mb-8">
                    <label className="block text-gray-300 mb-4">Select Membership Type*</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div 
                        className={`border ${formData.membershipType === 'basic' ? 'border-gym-red' : 'border-gray-700'} rounded-lg p-4 cursor-pointer`}
                        onClick={() => setFormData(prev => ({ ...prev, membershipType: 'basic' }))}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-xl font-bold">Basic</h3>
                          <input 
                            type="radio" 
                            name="membershipType" 
                            value="basic"
                            checked={formData.membershipType === 'basic'}
                            onChange={handleInputChange}
                            className="w-4 h-4 accent-gym-red"
                          />
                        </div>
                        <p className="text-2xl font-bold mb-2">$29<span className="text-sm text-gray-400">/month</span></p>
                        <p className="text-gray-400 text-sm">Perfect for beginners looking to start their fitness journey</p>
                      </div>
                      
                      <div 
                        className={`border ${formData.membershipType === 'premium' ? 'border-gym-red' : 'border-gray-700'} rounded-lg p-4 cursor-pointer bg-gradient-to-br from-gym-gray to-black`}
                        onClick={() => setFormData(prev => ({ ...prev, membershipType: 'premium' }))}
                      >
                        <div className="absolute top-0 right-0 bg-gym-red text-white text-xs font-bold px-2 py-1 uppercase rounded-bl-lg">
                          Popular
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-xl font-bold">Premium</h3>
                          <input 
                            type="radio" 
                            name="membershipType" 
                            value="premium"
                            checked={formData.membershipType === 'premium'}
                            onChange={handleInputChange}
                            className="w-4 h-4 accent-gym-red"
                          />
                        </div>
                        <p className="text-2xl font-bold mb-2">$59<span className="text-sm text-gray-400">/month</span></p>
                        <p className="text-gray-400 text-sm">Our most popular plan for dedicated fitness enthusiasts</p>
                      </div>
                      
                      <div 
                        className={`border ${formData.membershipType === 'elite' ? 'border-gym-red' : 'border-gray-700'} rounded-lg p-4 cursor-pointer`}
                        onClick={() => setFormData(prev => ({ ...prev, membershipType: 'elite' }))}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-xl font-bold">Elite</h3>
                          <input 
                            type="radio" 
                            name="membershipType" 
                            value="elite"
                            checked={formData.membershipType === 'elite'}
                            onChange={handleInputChange}
                            className="w-4 h-4 accent-gym-red"
                          />
                        </div>
                        <p className="text-2xl font-bold mb-2">$99<span className="text-sm text-gray-400">/month</span></p>
                        <p className="text-gray-400 text-sm">The ultimate fitness experience with exclusive premium benefits</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label className="block text-gray-300 mb-4">Payment Method*</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div 
                        className={`border ${formData.paymentMethod === 'credit' ? 'border-gym-red' : 'border-gray-700'} rounded-lg p-4 cursor-pointer`}
                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'credit' }))}
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="font-bold">Credit/Debit Card</h3>
                          <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="credit"
                            checked={formData.paymentMethod === 'credit'}
                            onChange={handleInputChange}
                            className="w-4 h-4 accent-gym-red"
                          />
                        </div>
                      </div>
                      
                      <div 
                        className={`border ${formData.paymentMethod === 'direct' ? 'border-gym-red' : 'border-gray-700'} rounded-lg p-4 cursor-pointer`}
                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'direct' }))}
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="font-bold">Direct Debit</h3>
                          <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="direct"
                            checked={formData.paymentMethod === 'direct'}
                            onChange={handleInputChange}
                            className="w-4 h-4 accent-gym-red"
                          />
                        </div>
                      </div>
                      
                      <div 
                        className={`border ${formData.paymentMethod === 'paypal' ? 'border-gym-red' : 'border-gray-700'} rounded-lg p-4 cursor-pointer`}
                        onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'paypal' }))}
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="font-bold">PayPal</h3>
                          <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="paypal"
                            checked={formData.paymentMethod === 'paypal'}
                            onChange={handleInputChange}
                            className="w-4 h-4 accent-gym-red"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button type="button" onClick={handlePrevStep} className="btn-secondary">
                      Previous Step
                    </button>
                    <button type="submit" className="btn-primary">
                      Next Step
                    </button>
                  </div>
                </form>
              )}
              
              {formStep === 3 && (
                <form onSubmit={handleSubmit} className="bg-gym-gray p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6">Emergency Contact</h2>
                  
                  <div className="mb-6">
                    <label htmlFor="emergencyContactName" className="block text-gray-300 mb-2">Emergency Contact Name*</label>
                    <input 
                      type="text" 
                      id="emergencyContactName"
                      name="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gym-dark text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gym-red" 
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="emergencyContactPhone" className="block text-gray-300 mb-2">Emergency Contact Phone*</label>
                    <input 
                      type="tel" 
                      id="emergencyContactPhone"
                      name="emergencyContactPhone"
                      value={formData.emergencyContactPhone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gym-dark text-white rounded-md px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gym-red" 
                    />
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-start">
                      <input 
                        type="checkbox" 
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        required
                        className="mt-1 mr-2 accent-gym-red"
                      />
                      <label htmlFor="agreeTerms" className="text-gray-300">
                        I agree to the <a href="#" className="text-gym-blue hover:underline">Terms & Conditions</a> and <a href="#" className="text-gym-blue hover:underline">Privacy Policy</a>. I understand that there is a one-time $49 initiation fee.
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button type="button" onClick={handlePrevStep} className="btn-secondary">
                      Previous Step
                    </button>
                    <button 
                      type="submit" 
                      className="btn-primary"
                      disabled={!formData.agreeTerms}
                    >
                      Complete Registration
                    </button>
                  </div>
                </form>
              )}
              
              {formStep === 4 && (
                <div className="bg-gym-gray p-8 rounded-lg text-center">
                  <div className="w-20 h-20 rounded-full bg-gym-red mx-auto mb-6 flex items-center justify-center">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Registration Complete!</h2>
                  <p className="text-gray-300 mb-6">
                    Thank you for joining StrengthHub! We've received your application and will contact you shortly to complete your membership setup.
                  </p>
                  <p className="text-gray-300 mb-8">
                    A confirmation email has been sent to <span className="text-white">{formData.email}</span> with all the details of your membership.
                  </p>
                  <div>
                    <a href="/" className="btn-primary inline-block">
                      Return to Home
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Join;
