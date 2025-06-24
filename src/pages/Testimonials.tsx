import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, Building, MapPin, Calendar, AlertCircle, CheckCircle } from 'lucide-react';
import { getTestimonials, submitTestimonial } from '../services/api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Stats data
  const stats = [
    { number: '50+', label: 'Happy Clients' },
    { number: '100%', label: 'Success Rate' },
    { number: '3', label: 'States Covered' },
    { number: '24/7', label: 'Support Available' },
  ];

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    location: '',
    rating: 5,
    date: '',
    text: '',
    services: '',
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Controls how many testimonials are shown initially
  const [visibleCount, setVisibleCount] = useState(4);

  // Fetch testimonials on component mount
  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await getTestimonials();
      setTestimonials(response.data || []);
      setError(null);
    } catch (err) {
      setError('Failed to load testimonials');
      console.error('Error fetching testimonials:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Set rating
  const setRating = (rate) => {
    setFormData((prev) => ({
      ...prev,
      rating: rate,
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Parse services into array
      const servicesArray = formData.services
        ? formData.services.split(',').map((s) => s.trim())
        : [];

      // Format date "Month Year"
      let formattedDate = formData.date;
      if (formData.date) {
        const [year, month] = formData.date.split('-');
        const dateObj = new Date(Number(year), Number(month) - 1);
        formattedDate = dateObj.toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        });
      }

      const testimonialData = {
        ...formData,
        services: servicesArray,
        date: formattedDate,
      };

      const response = await submitTestimonial(testimonialData);
      
      setSubmitStatus({
        type: 'success',
        message: response.message || 'Thank you for your testimonial! It has been added to our testimonials.'
      });

      // Create the new testimonial object to add to the list
      const newTestimonial = {
        id: Date.now(), // Temporary ID for display
        name: formData.name,
        position: formData.position,
        company: formData.company,
        location: formData.location,
        rating: formData.rating,
        text: formData.text,
        services: servicesArray,
        date: formattedDate,
        created_at: new Date().toISOString(),
        is_approved: true // Show immediately for better UX
      };

      // Add the new testimonial to the top of the list
      setTestimonials(prev => [newTestimonial, ...prev]);

      // Reset form
      setFormData({
        name: '',
        position: '',
        company: '',
        location: '',
        rating: 5,
        date: '',
        text: '',
        services: '',
      });

      // Scroll to testimonials section to show the new testimonial
      setTimeout(() => {
        const testimonialsSection = document.getElementById('testimonials-section');
        if (testimonialsSection) {
          testimonialsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);

    } catch (err) {
      setSubmitStatus({
        type: 'error',
        message: err.message || 'Failed to submit testimonial. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Slice testimonials to show limited count
  const visibleTestimonials = testimonials.slice(0, visibleCount);

  // Show more handler
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover what our clients say about our professional gratuity and
            trust services. Real experiences from businesses across Telangana,
            AP, and Karnataka.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section id="testimonials-section" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading testimonials...</p>
            </div>
          ) : error ? (
            <div className="bg-red-100 text-red-800 border border-red-300 rounded-lg px-6 py-5 text-center text-base md:text-lg max-w-2xl mx-auto">
              <AlertCircle className="h-6 w-6 mx-auto mb-2" />
              <strong>Error:</strong> {error}
            </div>
          ) : visibleTestimonials.length === 0 ? (
            <div className="bg-blue-50 text-blue-800 border border-blue-300 rounded-lg px-6 py-5 text-center text-base md:text-lg max-w-2xl mx-auto">
              <strong>Be the first!</strong> Share your experience with our services and help others discover the quality of our work.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id || index}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-full flex flex-col hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-between mb-4">
                    <Quote className="w-6 h-6 text-blue-600 opacity-50" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4 flex-grow">
                    "{testimonial.text}"
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {testimonial.services.map((service, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-blue-600 text-sm">
                          {testimonial.position}
                        </p>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Building className="w-4 h-4 mr-1" />
                          {testimonial.company}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {testimonial.location}
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {testimonial.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {visibleCount < testimonials.length && (
            <div className="mt-8 text-center">
              <button
                onClick={handleShowMore}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Submit Your Testimonial */}
      <section className="max-w-4xl mx-auto px-4 py-12 bg-white rounded-2xl shadow-md border border-gray-200 mb-20">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800">
          Submit Your Testimonial
        </h2>

        {/* Status Messages */}
        {submitStatus && (
          <div className={`mb-6 p-4 rounded-lg border ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 border-green-200 text-green-800' 
              : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            <div className="flex items-center space-x-2">
              {submitStatus.type === 'success' ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                <AlertCircle className="h-5 w-5" />
              )}
              <p className="font-medium">{submitStatus.message}</p>
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name *
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-blue-500 focus:outline-none"
              placeholder="Rajesh Kumar"
            />
          </div>

          {/* Position */}
          <div>
            <label
              htmlFor="position"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Position *
            </label>
            <input
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-blue-500 focus:outline-none"
              placeholder="HR Director"
            />
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company *
            </label>
            <input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-blue-500 focus:outline-none"
              placeholder="Tech Solutions Pvt Ltd"
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location *
            </label>
            <input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-blue-500 focus:outline-none"
              placeholder="Hyderabad, Telangana"
            />
          </div>

          {/* Services */}
          <div>
            <label
              htmlFor="services"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Services Used
            </label>
            <input
              id="services"
              name="services"
              value={formData.services}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-blue-500 focus:outline-none"
              placeholder="Trust Formation, AS-15 Valuation"
            />
          </div>

          {/* Date */}
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date *
            </label>
            <input
              id="date"
              name="date"
              type="month"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Testimonial Textarea */}
          <div className="md:col-span-3">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Testimonial *
            </label>
            <textarea
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              required
              rows={3}
              className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm focus:ring-blue-500 focus:outline-none resize-none"
              placeholder="Share your experience..."
            />
          </div>

          {/* Rating */}
          <div className="md:col-span-3 flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Rating *</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`w-5 h-5 ${
                    formData.rating >= star
                      ? 'text-yellow-400'
                      : 'text-gray-300 hover:text-yellow-400'
                  }`}
                  aria-label={`${star} star`}
                >
                  <Star className="w-4 h-4 fill-current" />
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-3 text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white inline-block mr-2"></div>
                  Submitting...
                </>
              ) : (
                'Submit Testimonial'
              )}
            </button>
          </div>
        </form>
      </section>

      {/* Client Success Metrics */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Success Metrics
            </h2>
            <p className="text-xl text-gray-600">
              Measuring our success through client satisfaction and results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MetricBox
              color="blue"
              value="100%"
              title="Client Satisfaction"
              subtitle="All clients rate us 5 stars"
            />
            <MetricBox
              color="green"
              value="95%"
              title="Faster Processing"
              subtitle="Compared to industry average"
            />
            <MetricBox
              color="purple"
              value="0%"
              title="Compliance Issues"
              subtitle="Perfect compliance record"
            />
            <MetricBox
              color="orange"
              value="90%"
              title="Repeat Clients"
              subtitle="Choose us for additional services"
            />
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Technology',
              'Manufacturing',
              'Healthcare',
              'Financial Services',
              'Engineering',
              'Retail',
              'Education',
              'Pharmaceuticals',
              'Automotive',
              'Textiles',
              'Food & Beverage',
              'Construction',
            ].map((industry, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <div className="text-sm font-medium text-gray-700">
                  {industry}
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
            Join Our Satisfied Clients
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the same level of professional service and expertise that
            our clients rave about. Contact us today for your gratuity and trust
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Project
            </Link>
            <Link
              to="/contact"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Metric Box
const MetricBox = ({ color, value, title, subtitle }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
    <div className={`text-3xl font-bold text-${color}-600 mb-2`}>{value}</div>
    <div className="text-gray-900 font-semibold mb-1">{title}</div>
    <div className="text-sm text-gray-600">{subtitle}</div>
  </div>
);

export default Testimonials;