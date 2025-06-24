import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Calculator, FileText, Building2, UserCheck, Settings, Clock } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      title: 'AS-15 Valuations',
      icon: Calculator,
      faqs: [
        {
          question: 'What is AS-15 valuation and why is it required?',
          answer: 'AS-15 valuation is an accounting standard that requires companies to recognize and measure employee benefits, including gratuity, leave encashment, and superannuation. It ensures accurate financial reporting by calculating the present value of defined benefit obligations. This valuation is mandatory for companies to comply with accounting standards and provide transparent financial statements.'
        },
        {
          question: 'How often should AS-15 valuations be conducted?',
          answer: 'AS-15 valuations should be conducted annually for financial reporting purposes. However, companies may also require interim valuations in case of significant changes in employee demographics, benefit structures, or actuarial assumptions. Regular valuations ensure compliance and accurate financial planning.'
        },
        {
          question: 'What information is required for AS-15 valuation?',
          answer: 'For AS-15 valuation, we require employee data including age, service period, salary details, past service records, and benefit structure details. We also need information about the discount rate, salary escalation assumptions, mortality tables, and withdrawal rates applicable to your organization.'
        },
        {
          question: 'How long does the AS-15 valuation process take?',
          answer: 'Typically, AS-15 valuation takes 2-4 working days from the date of receiving complete employee data and required information. The timeline may vary based on the complexity of the benefit structure and size of the employee base.'
        }
      ]
    },
    {
      title: 'Trust Formation',
      icon: FileText,
      faqs: [
        {
          question: 'Why should I form a gratuity trust for my company?',
          answer: 'Forming a gratuity trust provides several benefits including tax advantages, better fund management, regulatory compliance, and protection of employee benefits. It helps companies set aside funds specifically for gratuity payments and ensures employees receive their benefits even if the company faces financial difficulties.'
        },
        {
          question: 'What documents are required for trust formation?',
          answer: 'Trust formation requires several documents including Trust Deed, Memorandum and Articles of Association, Board Resolution, Trustee appointment letters, KYC documents of trustees, bank account details, and employee benefit scheme details. We assist in preparing all necessary documentation.'
        },
        {
          question: 'Who can be appointed as trustees?',
          answer: 'Trustees can be company representatives, independent professionals, or employees. Typically, trusts have 3-5 trustees including company nominees and employee representatives. Trustees should be individuals with good standing and understanding of fiduciary responsibilities.'
        },
        {
          question: 'Can trust rules be modified after formation?',
          answer: 'Yes, trust rules can be modified with proper procedures and approvals. Any amendments require trustee approval, regulatory compliance checks, and may need PCIT endorsement depending on the nature of changes. We provide complete support for trust modifications.'
        }
      ]
    },
    {
      title: 'Trust Registration',
      icon: Building2,
      faqs: [
        {
          question: 'Is trust registration mandatory?',
          answer: 'Yes, trust registration is mandatory under the Registration Act. Registration provides legal validity, enables tax benefits, and ensures regulatory compliance. Unregistered trusts may face legal challenges and tax implications.'
        },
        {
          question: 'Which authority handles trust registration?',
          answer: 'Trust registration is handled by the Sub Registrar Office in the jurisdiction where the trust is established. The process involves document verification, stamp duty payment, and registration formalities.'
        },
        {
          question: 'What are the costs involved in trust registration?',
          answer: 'Trust registration costs include stamp duty (varies by state), registration fees, documentation charges, and professional service fees. We provide transparent cost estimates based on your specific requirements and jurisdiction.'
        },
        {
          question: 'How long does trust registration take?',
          answer: 'Trust registration typically takes 2-3 weeks from document submission, depending on the Sub Registrar Office workload and documentation completeness. We handle all liaison work to ensure smooth processing.'
        }
      ]
    },
    {
      title: 'PCIT Approvals',
      icon: UserCheck,
      faqs: [
        {
          question: 'What is PCIT approval and when is it required?',
          answer: 'Contributions to an approved Gratuity fund is deductible under section 36 (1)(v) of the Income Tax Act, 1961. Income accrued on the investment made by the group gratuity scheme is exempt from income tax under section 10(25)(iv). It ensures the trust complies with income tax regulations and operates for genuine employee welfare purposes.'
        },
        {
          question: 'What changes require PCIT endorsement?',
          answer: 'PCIT endorsement is required for trustee changes, registered office address changes, employee count modifications, trust rule amendments, partial winding up, complete closure, employee transfers between trusts, and jurisdiction changes.'
        },
        {
          question: 'How long does PCIT approval take?',
          answer: 'PCIT approval typically takes 6-8 weeks from application submission. The timeline depends on the complexity of the case and PCIT office workload. We maintain regular follow-up to expedite the process.'
        },
        {
          question: 'What if PCIT approval is delayed or rejected?',
          answer: 'In case of delays, we provide regular follow-up and status updates. If rejected, we analyze the reasons, address concerns, and resubmit with necessary modifications. Our experience helps in successfully obtaining approvals.'
        }
      ]
    },
    {
      title: 'General Questions',
      icon: HelpCircle,
      faqs: [
        {
          question: 'Which states do you provide services in?',
          answer: 'We provide comprehensive gratuity and trust services across Telangana, Andhra Pradesh, and Karnataka. Our team has extensive experience with regulatory requirements in these states and maintains good relationships with local authorities.'
        },
        {
          question: 'Do you provide ongoing support after service completion?',
          answer: 'Yes, we provide ongoing support including periodic compliance reviews, annual maintenance, regulatory updates, and assistance with any future modifications or endorsements. Our relationship with clients extends beyond project completion.'
        },
        {
          question: 'What makes your services different from others?',
          answer: 'Our founder brings 20+ years of insurance industry experience with FIII qualification. We provide end-to-end solutions, maintain high success rates, ensure timely delivery, and offer personalized service with dedicated support throughout the process.'
        },
        {
          question: 'How do you ensure confidentiality of client information?',
          answer: 'We maintain strict confidentiality protocols including secure document handling, limited access controls, non-disclosure agreements, and professional ethical standards. Client information is protected throughout our engagement and beyond.'
        },
        {
          question: 'Do you provide emergency or urgent services?',
          answer: 'Yes, we understand business urgencies and provide expedited services when required. Our team can prioritize urgent cases and work extended hours to meet critical deadlines while maintaining quality standards.'
        }
      ]
    }
  ];

  const allFaqs = faqCategories.flatMap((category, categoryIndex) =>
    category.faqs.map((faq, faqIndex) => ({
      ...faq,
      categoryTitle: category.title,
      categoryIcon: category.icon,
      index: categoryIndex * 10 + faqIndex
    }))
  );

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <HelpCircle className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find answers to common questions about our gratuity and trust services. 
            Can't find what you're looking for? Contact us for personalized assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Clock className="h-4 w-4 text-green-500" />
              <span>Quick Answers</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <UserCheck className="h-4 w-4 text-blue-500" />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <HelpCircle className="h-4 w-4 text-purple-500" />
              <span>Comprehensive Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories Overview */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {faqCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-xl shadow-sm mb-3">
                  <category.icon className="h-8 w-8 text-blue-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{category.title}</h3>
                <p className="text-xs text-gray-600">{category.faqs.length} questions</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {allFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <faq.categoryIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 text-left">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium">{faq.categoryTitle}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team of experts is here to help you with personalized guidance 
              and detailed explanations for your specific requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Consultation</h3>
                <p className="text-sm text-gray-600">Get personalized advice from our experienced professionals</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-sm text-gray-600">Receive answers to your queries within 24 hours</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <UserCheck className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Detailed Guidance</h3>
                <p className="text-sm text-gray-600">Comprehensive explanations tailored to your situation</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Schedule Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;