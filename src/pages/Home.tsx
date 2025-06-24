import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, CheckCircle, Star, Calculator, FileText, Building2, UserCheck, Settings } from 'lucide-react';
import { getTestimonials } from '../services/api';

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await getTestimonials();
      // Get only first 3 testimonials for home page
      setTestimonials((response.data || []).slice(0, 3));
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  };

  const services = [
    {
      icon: Calculator,
      title: 'AS-15 Valuations',
      description: 'Expert valuations for Group Gratuity, Superannuation, and Leave Encashment policies.'
    },
    {
      icon: FileText,
      title: 'Trust Formation',
      description: 'Complete assistance in preparing trust deeds and formation documents.'
    },
    {
      icon: Building2,
      title: 'Trust Registration',
      description: 'Facilitate trust registration with Sub Registrar Office coordination.'
    },
    {
      icon: UserCheck,
      title: 'PCIT Endorsements',
      description: 'Support for all trust modifications and approvals from PCIT.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              One-Stop <span className="text-yellow-400">Gratuity</span> & 
              <br />Trust Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Professional AS-15 valuations, trust formation, and PCIT approvals 
              across Telangana, Andhra Pradesh, and Karnataka since 2023
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center"
              >
                Get Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-3">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-3">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-100 p-4 rounded-full mb-3">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-4 rounded-full mb-3">
                <Building2 className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-gray-600">States Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive gratuity and trust solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Sabitha Gratuity Services?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded by M. Neelima Reddy (FIII), our firm brings over two decades 
                of insurance and financial services expertise to provide comprehensive 
                gratuity and trust solutions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <span className="text-gray-700">Expert AS-15 valuations with regulatory compliance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <span className="text-gray-700">End-to-end trust formation and registration support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <span className="text-gray-700">Seamless PCIT approval and endorsement services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <span className="text-gray-700">Serving clients across three states with dedication</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center mt-8 text-blue-600 font-semibold hover:text-blue-700"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">M. Neelima Reddy</h3>
                  <p className="text-blue-200">Founder & Principal Consultant</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-yellow-400" />
                    <span>Fellow, Insurance Institute of India (FIII)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-yellow-400" />
                    <span>20+ Years Insurance Industry Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-yellow-400" />
                    <span>Former Head - Life Insurance Department</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses across multiple states
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading testimonials...</p>
            </div>
          ) : testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-blue-600">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Building Our Success Stories
                </h3>
                <p className="text-blue-700 mb-4">
                  We're working with amazing clients across Telangana, AP, and Karnataka. 
                  Their testimonials will be featured here soon.
                </p>
                <Link
                  to="/testimonials"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  Share Your Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
            >
              {testimonials.length > 0 ? 'Read More Testimonials' : 'Submit Your Testimonial'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a consultation and let us handle your 
            gratuity and trust requirements professionally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Book Consultation
            </Link>
            <a
              href="tel:+919000552708"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;