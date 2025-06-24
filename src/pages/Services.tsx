import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator, FileText, Building2, UserCheck,
  CheckCircle, ArrowRight, Clock, Shield
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: 'AS-15 Valuations',
      subtitle: 'Expert Actuarial Valuations',
      description: 'Comprehensive AS-15 valuations for Group Gratuity, Group Superannuation, and Leave Encashment policies in compliance with accounting standards.',
      features: [
        'Group Gratuity Policy Valuations',
        'Group Superannuation Assessments',
        'Leave Encashment Calculations',
        'Compliance with AS-15 Standards',
        'Regular Periodic Reviews',
        'Detailed Valuation Reports'
      ],
      benefits: [
        'Accurate financial reporting',
        'Regulatory compliance assurance',
        'Professional documentation',
        'Expert analysis and insights'
      ]
    },
    {
      icon: FileText,
      title: 'Trust Formation Assistance',
      subtitle: 'Complete Documentation Support',
      description: 'End-to-end assistance in preparing trust deeds and all related documents required for trust formation as per regulatory requirements.',
      features: [
        'Arranging Group Gratuity valuations',
        'Arranging Leave Encashment Calculations',
        'Arranging Group Superannuation Assessments',
        'Compliance with AS-15 Staqndards'
      ],
      benefits: [
        'Legally compliant documentation',
        'Reduced formation time',
        'Professional guidance',
        'Error-free paperwork'
      ]
    },
    {
      icon: Building2,
      title: 'Trust Registration',
      subtitle: 'Seamless Registration Process',
      description: 'Complete facilitation of trust registration with Sub Registrar Office through expert coordination and liaison services.',
      features: [
        'Sub Registrar Office Coordination',
        'Application Processing',
        'Document Submission',
        'Follow-up Management',
        'Status Updates',
        'Registration Certificate Collection'
      ],
      benefits: [
        'Hassle-free registration',
        'Faster processing',
        'Regular status updates',
        'Professional representation'
      ]
    },
    {
      icon: UserCheck,
      title: 'PCIT Endorsements',
      subtitle: 'Comprehensive Approval Support',
      description: 'Expert support for obtaining PCIT approvals and handling all types of trust modifications and endorsements.',
      features: [
        'Initial PCIT Approval',
        'Trustee Changes',
        'Address Modifications',
        'Employee Count Updates',
        'Trust Winding Procedures',
        'Complete Trust Closure',
        'Partial Employee Movement',
        'Jurisdiction Changes'
      ],
      benefits: [
        'Streamlined approval process',
        'Expert liaison services',
        'Comprehensive support',
        'Timely approvals'
      ]
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Professional Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive gratuity and trust solutions designed to meet all your 
            regulatory and compliance requirements with professional excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Shield className="h-4 w-4 text-green-500" />
              <span>100% Success Rate</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>Timely Delivery</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <UserCheck className="h-4 w-4 text-purple-500" />
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                        <p className="text-blue-200">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-blue-100 mb-6">{service.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-yellow-300">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-yellow-300 mt-0.5 flex-shrink-0" />
                              <span className="text-blue-100">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Service Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="bg-blue-100 p-1 rounded-full mt-1">
                            <CheckCircle className="h-4 w-4 text-blue-600" />
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center"
                      >
                        Get Quote for {service.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Gratuity Services?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get a customized solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
