import React from 'react';
import { Award, Calendar, MapPin, Users, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Sabitha Gratuity Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for comprehensive gratuity and trust solutions, 
              backed by decades of experience and professional expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Sabitha Gratuity Services was founded in 2024 as a partnership firm, 
                  building upon the individual expertise of our founder, M. Neelima Reddy, 
                  who began providing specialized gratuity services in 2023.
                </p>
                <p>
                  Having worked with a broking firm for nearly two decades, our founder 
                  experienced firsthand the challenges clients face when liaising with 
                  competent authorities for gratuity-related approvals. These experiences 
                  inspired the creation of a dedicated service provider that would serve 
                  as a one-stop solution for all gratuity and trust-related needs.
                </p>
                <p>
                  Today, our team successfully serves reputed clients across Telangana, 
                  Andhra Pradesh, and Karnataka, providing comprehensive solutions that 
                  simplify complex regulatory processes.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2023</div>
                    <div className="text-blue-200 text-sm">Individual Services Started</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2024</div>
                    <div className="text-blue-200 text-sm">Partnership Firm Established</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-blue-200 text-sm">Satisfied Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">3</div>
                    <div className="text-blue-200 text-sm">States Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
            <p className="text-xl text-gray-600">
              Leading with expertise, experience, and dedication
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white text-center">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">M. Neelima Reddy</h3>
                  <p className="text-blue-200">Founder & Principal Consultant</p>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Professional Background</h4>
                  <p className="text-gray-600">
                    With over 20 years of experience in the insurance industry, M. Neelima Reddy 
                    served as Head of Life Insurance Department at a prominent broking firm from 
                    2004 to 2023. Her extensive experience in dealing with regulatory authorities 
                    and understanding client challenges led to the formation of Sabitha Gratuity Services.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Qualifications & Certifications</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <Award className="h-6 w-6 text-blue-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Fellow, Insurance Institute of India (FIII)</div>
                        <div className="text-sm text-gray-600">Pune - 2015</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="h-6 w-6 text-green-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Post Graduate in Journalism (MCJ)</div>
                        <div className="text-sm text-gray-600">Osmania University - 2004</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Expertise Areas</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">AS-15 Valuations</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Trust Formation</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">PCIT Approvals</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Regulatory Compliance</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">Insurance Broking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide comprehensive, reliable, and efficient gratuity and trust 
                solutions that simplify complex regulatory processes for our clients 
                across multiple states.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the most trusted and preferred partner for gratuity and 
                trust services, known for our expertise, integrity, and client-centric 
                approach across South India.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, excellence, client satisfaction, and continuous learning 
                drive everything we do. We believe in building long-term relationships 
                based on trust and professional excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Geographic Reach</h2>
            <p className="text-xl text-gray-600">
              Serving clients across three major states in South India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Telangana</h3>
              <p className="text-gray-600">
                Comprehensive coverage across Telangana with deep understanding 
                of local regulatory requirements and business environment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Andhra Pradesh</h3>
              <p className="text-gray-600">
                Extensive network and experience serving businesses across 
                Andhra Pradesh with personalized service delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Karnataka</h3>
              <p className="text-gray-600">
                Growing presence in Karnataka with dedicated support for 
                businesses seeking reliable gratuity and trust services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">
              Combining experience, expertise, and dedication for exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Professional Excellence</h3>
              <p className="text-sm text-gray-600">FIII qualified founder with 20+ years experience</p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white p-4 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Client-Centric Approach</h3>
              <p className="text-sm text-gray-600">Tailored solutions for each client's unique needs</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white p-4 rounded-full w-fit mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Timely Delivery</h3>
              <p className="text-sm text-gray-600">Consistent track record of meeting deadlines</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white p-4 rounded-full w-fit mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Multi-State Coverage</h3>
              <p className="text-sm text-gray-600">Comprehensive service across three states</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;