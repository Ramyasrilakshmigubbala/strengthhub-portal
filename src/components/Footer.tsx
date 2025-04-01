
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8 text-white border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-2xl font-poppins font-bold mb-4">
              STRENGTH<span className="text-gym-red">HUB</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Transform your body and mind at StrengthHub. Our state-of-the-art facilities and expert trainers will help you achieve your fitness goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gym-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gym-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gym-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gym-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-gym-blue transition-colors">About Us</Link></li>
              <li><Link to="/facilities" className="text-gray-400 hover:text-gym-blue transition-colors">Facilities</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-gym-blue transition-colors">Programs</Link></li>
              <li><Link to="/trainers" className="text-gray-400 hover:text-gym-blue transition-colors">Trainers</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-gym-blue transition-colors">Membership</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gym-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 - Programs */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/programs" className="text-gray-400 hover:text-gym-blue transition-colors">Personal Training</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-gym-blue transition-colors">Group Fitness</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-gym-blue transition-colors">Weight Loss</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-gym-blue transition-colors">Strength & Conditioning</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-gym-blue transition-colors">HIIT Classes</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-gym-blue transition-colors">Online Training</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin size={18} className="text-gym-red mr-2" />
                <span className="text-gray-400">123 Fitness Street, Gym City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gym-red mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gym-red mr-2" />
                <span className="text-gray-400">info@strengthhub.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Opening Hours</h4>
              <p className="text-gray-400">Monday - Friday: 6am - 10pm</p>
              <p className="text-gray-400">Weekends: 8am - 8pm</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} StrengthHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
