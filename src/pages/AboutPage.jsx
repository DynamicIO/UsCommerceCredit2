import React from 'react'
import { motion } from 'framer-motion'
import { 
  Target, 
  Users, 
  Award, 
  MapPin,
  Clock,
  TrendingUp,
  Shield,
  Globe,
  Heart,
  CheckCircle
} from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We deliver accurate, data-driven financial solutions tailored to each client's unique requirements."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Building lasting relationships through transparency, reliability, and ethical business practices."
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "Maintaining the highest standards in service delivery and financial expertise across all sectors."
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "Working closely with our clients as trusted partners in their financial success and growth."
    }
  ]

  const milestones = [
    {
      year: "2007",
      title: "Company Founded",
      description: "US Commerce Credit, Corp. established in Miami, FL with a vision to revolutionize commercial finance."
    },
    {
      year: "2010",
      title: "First $1B Milestone",
      description: "Achieved our first billion dollars in closed financing deals, establishing our market presence."
    },
    {
      year: "2015",
      title: "National Expansion",
      description: "Expanded operations nationwide, serving clients across all major metropolitan markets."
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Launched advanced digital platforms for streamlined client experience and faster processing."
    },
    {
      year: "2023",
      title: "$150B Managed Assets",
      description: "Reached $150 billion in managed collateral, cementing our position as an industry leader."
    }
  ]

  const leadership = [
    {
      name: "Michael Rodriguez",
      position: "Chief Executive Officer",
      experience: "25+ years in commercial finance",
      description: "Leading strategic vision and business development with extensive experience in investment banking."
    },
    {
      name: "Sarah Chen",
      position: "Chief Financial Officer",
      experience: "20+ years in financial services",
      description: "Overseeing financial operations and risk management with expertise in capital markets."
    },
    {
      name: "David Thompson",
      position: "Chief Operating Officer",
      experience: "18+ years in commercial lending",
      description: "Managing day-to-day operations and client relations with a focus on operational excellence."
    },
    {
      name: "Lisa Martinez",
      position: "Head of Investment Banking",
      experience: "22+ years in M&A advisory",
      description: "Leading merger and acquisition transactions with specialization in hospitality and energy sectors."
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
                About US Commerce Credit
              </h1>
              <p className="text-xl md:text-2xl text-navy-100 mb-8">
                Since 2007, we've been at the forefront of commercial finance, 
                helping businesses across America achieve their financial goals.
              </p>
              <div className="flex items-center justify-center space-x-2 text-navy-200">
                <MapPin className="h-5 w-5" />
                <span>999 Brickell Ave, Suite 820, Miami, FL 33131</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white dark:bg-charcoal-900 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-charcoal-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-charcoal-600 dark:text-gray-300 mb-6">
                To provide innovative commercial financing solutions that empower businesses 
                to grow, expand, and achieve their strategic objectives while maintaining 
                the highest standards of integrity and service.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-navy-800 dark:text-navy-400 mt-1" />
                  <p className="text-charcoal-800 dark:text-gray-200">
                    Deliver customized financial solutions for complex business needs
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-navy-800 dark:text-navy-400 mt-1" />
                  <p className="text-charcoal-800 dark:text-gray-200">
                    Build long-term partnerships based on trust and mutual success
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-navy-800 dark:text-navy-400 mt-1" />
                  <p className="text-charcoal-800 dark:text-gray-200">
                    Maintain excellence in risk management and regulatory compliance
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
                             className="bg-gray-50 dark:bg-charcoal-800 p-8 rounded-xl border border-gray-100 dark:border-charcoal-600"
            >
              <h3 className="text-3xl font-bold text-charcoal-900 dark:text-white mb-6">
                Our Vision
              </h3>
              <p className="text-lg text-charcoal-600 dark:text-gray-300 mb-6">
                To be the leading commercial finance institution recognized for innovation, 
                expertise, and exceptional client service in the financial industry.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-800 dark:text-white">$4.6B+</div>
                  <div className="text-sm text-charcoal-600 dark:text-gray-400">Deals Closed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-800 dark:text-white">$150B</div>
                  <div className="text-sm text-charcoal-600 dark:text-gray-400">Assets Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-800 dark:text-white">15+</div>
                  <div className="text-sm text-charcoal-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-800 dark:text-white">1000+</div>
                  <div className="text-sm text-charcoal-600 dark:text-gray-400">Projects</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 dark:bg-charcoal-800 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-900 dark:text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-charcoal-600 dark:text-gray-300 max-w-3xl mx-auto">
              These fundamental principles guide our decisions, shape our culture, 
              and define how we serve our clients every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                                 className="bg-white dark:bg-charcoal-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 dark:border-charcoal-600"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-navy-800 dark:bg-navy-700 text-white rounded-full">
                    <value.icon className="h-8 w-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="bg-white dark:bg-charcoal-900 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-900 dark:text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-charcoal-600 dark:text-gray-300 max-w-3xl mx-auto">
              From a Miami startup to a national leader in commercial finance, 
              our growth story reflects our commitment to excellence and innovation.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-navy-800 dark:bg-navy-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                                         <div className="bg-white dark:bg-charcoal-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-charcoal-600">
                      <div className="flex items-center justify-center w-16 h-16 bg-navy-800 dark:bg-navy-700 text-white rounded-full text-xl font-bold mb-4 mx-auto">
                        <Clock className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-2">
                        {milestone.year}
                      </h3>
                      <h4 className="text-xl font-semibold text-charcoal-900 dark:text-white mb-3">
                        {milestone.title}
                      </h4>
                      <p className="text-charcoal-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-4 h-4 bg-navy-800 dark:bg-navy-600 rounded-full"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-gray-50 dark:bg-charcoal-800 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-900 dark:text-white mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-charcoal-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of expertise in commercial finance, 
              investment banking, and business development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                                 className="bg-white dark:bg-charcoal-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-charcoal-600"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-navy-800 dark:bg-navy-700 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-charcoal-900 dark:text-white mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-navy-800 dark:text-navy-400 font-semibold mb-2">
                      {leader.position}
                    </p>
                    <p className="text-sm text-charcoal-600 dark:text-gray-400 mb-3">
                      {leader.experience}
                    </p>
                    <p className="text-charcoal-700 dark:text-gray-300">
                      {leader.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Headquarters */}
      <section className="bg-navy-800 dark:bg-navy-900 text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Miami Headquarters</h2>
              <p className="text-xl text-navy-100 mb-6">
                Located in the heart of Miami's financial district, our headquarters 
                serves as the central hub for our nationwide operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-navy-200" />
                  <div>
                    <p className="font-semibold">999 Brickell Ave, Suite 820</p>
                    <p className="text-navy-200">Miami, FL 33131</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-navy-200" />
                  <p>Serving clients nationwide from our Miami base</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-navy-200" />
                  <p>Home to our experienced team of financial professionals</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6">Why Miami?</h3>
              <div className="space-y-4">
                <p className="text-navy-100">
                  <strong>Strategic Location:</strong> Gateway to Latin America and major financial center
                </p>
                <p className="text-navy-100">
                  <strong>Business Environment:</strong> Dynamic ecosystem for international commerce
                </p>
                <p className="text-navy-100">
                  <strong>Connectivity:</strong> Direct access to global markets and business networks
                </p>
                <p className="text-navy-100">
                  <strong>Talent Pool:</strong> Access to top-tier financial and business professionals
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage 