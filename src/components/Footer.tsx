import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo/SGS_footer.png"
                alt="Sabitha Gratuity Services Logo"
                className="h-15 w-16"
              />
              <span className="text-2xl font-semibold text-gray-900 text-white">
                Sabitha Gratuity Services
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional gratuity and trust solutions provider serving clients across 
              Telangana, Andhra Pradesh, and Karnataka since 2023. Your trusted partner 
              for AS-15 valuations, trust formation, and PCIT approvals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">Services</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors duration-200">Testimonials</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors duration-200">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+91 90005 52708</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">neelima@gratuityservices.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Serving Telangana, Andhra Pradesh & Karnataka
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} <span className="font-medium">Sabitha Gratuity Services</span>. All rights reserved. | 
            Founded by <span className="font-medium">M. Neelima Reddy</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;