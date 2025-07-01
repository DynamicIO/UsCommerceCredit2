import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Building, 
  TrendingUp, 
  Zap, 
  MapPin, 
  Briefcase,
  DollarSign,
  Users,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Factory,
  Hotel,
  Landmark
} from 'lucide-react'

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Building,
      title: "Commercial Real Estate Loans",
      subtitle: "Comprehensive Property Financing",
      description: "Expert financing solutions for commercial real estate acquisition, development, and refinancing across all property types.",
      features: [
        "Acquisition financing up to $500M",
        "Construction and development loans",
        "Bridge and interim financing",
        "Permanent financing solutions",
        "Portfolio and bulk acquisitions"
      ],
      benefits: [
        "Competitive rates and terms",
        "Fast approval process (30-45 days)",
        "Flexible underwriting criteria",
        "Nationwide lending capabilities"
      ]
    },
    {
      icon: Hotel,
      title: "Mergers & Acquisitions",
      subtitle: "Hotels & Resorts Specialty",
      description: "Strategic advisory services for hospitality industry mergers, acquisitions, and capital raising with deep sector expertise.",
      features: [
        "Buy-side and sell-side advisory",
        "Hospitality asset valuation",
        "Due diligence management",
        "Deal structuring and negotiation",
        "Post-transaction integration"
      ],
      benefits: [
        "Industry-specific expertise",
        "Extensive buyer/seller network",
        "Proven track record in hospitality",
        "End-to-end transaction support"
      ]
    },
    {
      icon: Factory,
      title: "Oil, Gas & Mineral Financing",
      subtitle: "Energy Sector Expertise",
      description: "Specialized financing solutions for energy sector investments, including oil and gas operations and mineral rights acquisitions.",
      features: [
        "Working capital facilities",
        "Equipment financing",
        "Reserve-based lending",
        "Mineral rights financing",
        "Energy infrastructure projects"
      ],
      benefits: [
        "Deep energy sector knowledge",
        "Risk-adjusted pricing models",
        "Flexible repayment structures",
        "Regulatory compliance expertise"
      ]
    },
    {
      icon: MapPin,
      title: "Land Acquisition",
      subtitle: "Development & Investment",
      description: "Strategic land acquisition financing for development projects, agricultural investments, and long-term land banking strategies.",
      features: [
        "Raw land acquisition loans",
        "Agricultural land financing",
        "Subdivision development",
        "Land banking facilities",
        "Entitlement financing"
      ],
      benefits: [
        "Flexible loan-to-value ratios",
        "Interest-only payment options",
        "Quick closing capabilities",
        "Development expertise"
      ]
    },
    {
      icon: Landmark,
      title: "Economic Development Projects",
      subtitle: "Public-Private Partnerships",
      description: "Comprehensive financing for large-scale economic development initiatives and public-private partnership projects.",
      features: [
        "Infrastructure development",
        "Mixed-use projects",
        "Transit-oriented development",
        "Affordable housing initiatives",
        "Community development projects"
      ],
      benefits: [
        "Government relations expertise",
        "Tax credit optimization",
        "Community impact focus",
        "Long-term partnership approach"
      ]
    }
  ]

  const additionalServices = [
    {
      icon: TrendingUp,
      title: "Investment Banking",
      description: "Strategic financial advisory for capital raising, debt structuring, and financial restructuring."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for complex financial transactions."
    },
    {
      icon: Users,
      title: "Private Lending",
      description: "Flexible private lending solutions for unique financing requirements and time-sensitive deals."
    },
    {
      icon: Briefcase,
      title: "Asset Management",
      description: "Professional asset management services for institutional and high-net-worth clients."
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Discuss your financing needs and project requirements with our expert team."
    },
    {
      step: "02",
      title: "Proposal Development",
      description: "Receive a customized financing proposal tailored to your specific situation."
    },
    {
      step: "03",
      title: "Due Diligence",
      description: "Comprehensive review and analysis of all project documentation and financials."
    },
    {
      step: "04",
      title: "Approval & Closing",
      description: "Efficient approval process followed by seamless transaction closing."
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-800 to-navy-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-navy-100 mb-8">
                Comprehensive commercial finance solutions tailored to your business needs, 
                backed by $4.6B+ in successful transactions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/contact" className="btn-primary bg-white text-navy-800 hover:bg-gray-100 hover:text-navy-900">
                  Get Started Today
                </Link>
                <div className="flex items-center justify-center space-x-2 text-navy-200">
                  <Clock className="h-5 w-5" />
                  <span>30-45 day approval process</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="bg-white dark:bg-charcoal-900 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-900 dark:text-white mb-6">
              Core Financial Services
            </h2>
            <p className="text-xl text-charcoal-600 dark:text-gray-300 max-w-3xl mx-auto">
              We specialize in complex commercial financing across multiple sectors, 
              providing expert solutions for your most challenging financial requirements.
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-navy-800 dark:bg-navy-700 text-white rounded-full">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-charcoal-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-navy-800 dark:text-navy-400 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-charcoal-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-charcoal-900 dark:text-white mb-4">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-navy-800 dark:text-navy-400 mt-1 flex-shrink-0" />
                          <span className="text-charcoal-700 dark:text-gray-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-navy-800 dark:text-navy-400 font-semibold hover:text-navy-900 dark:hover:text-navy-300 transition-colors duration-200"
                  >
                    Learn More About This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gray-50 dark:bg-charcoal-800 p-8 rounded-xl border border-gray-100 dark:border-charcoal-600">
                    <h4 className="text-xl font-semibold text-charcoal-900 dark:text-white mb-4">
                      Why Choose Us:
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-navy-800 dark:bg-navy-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-charcoal-700 dark:text-gray-200">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 dark:bg-charcoal-800 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-900 dark:text-white mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-charcoal-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial services to support all aspects of your business growth and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                                 className="bg-white dark:bg-charcoal-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 dark:border-charcoal-600"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-navy-800 dark:bg-navy-700 text-white rounded-full">
                    <service.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <Link 
                  to="/contact" 
                  className="text-navy-800 dark:text-navy-400 font-medium hover:text-navy-900 dark:hover:text-navy-300 transition-colors duration-200"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white dark:bg-charcoal-900 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-900 dark:text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-charcoal-600 dark:text-gray-300 max-w-3xl mx-auto">
              A streamlined approach to commercial financing that gets you from application to closing efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-navy-800 dark:bg-navy-700 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-1 bg-gray-200 dark:bg-charcoal-600 -ml-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-charcoal-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-800 dark:bg-navy-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Discuss Your Financing Needs?
            </h2>
            <p className="text-xl text-navy-100 mb-8">
              Our expert team is ready to provide a customized financing solution 
              for your specific requirements. Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="btn-primary bg-white text-navy-800 hover:bg-gray-100 hover:text-navy-900">
                Schedule Consultation
              </Link>
              <div className="flex items-center justify-center space-x-4 text-navy-200">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5" />
                  <span>$4.6B+ Closed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>$150B Managed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage 