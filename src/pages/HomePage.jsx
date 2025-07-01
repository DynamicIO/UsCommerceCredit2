import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Shield, 
  Users, 
  Award,
  ChevronRight,
  Building,
  DollarSign,
  Globe,
  Briefcase,
  Star,
  CheckCircle2
} from 'lucide-react'

const CounterAnimation = ({ end, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count >= 10000 ? count.toLocaleString() : count}{suffix}
    </span>
  )
}

const HomePage = () => {
  const stats = [
    {
      value: 4.6,
      suffix: "B+",
      prefix: "$",
      label: "In Closed Financing Deals",
      icon: DollarSign
    },
    {
      value: 150,
      suffix: "B",
      prefix: "$",
      label: "In Managed Collateral",
      icon: Shield
    },
    {
      value: 2007,
      suffix: "",
      prefix: "Est. ",
      label: "18+ Years of Excellence",
      icon: Award
    },
    {
      value: 1000,
      suffix: "+",
      prefix: "",
      label: "Successful Projects",
      icon: Briefcase
    }
  ]

  const features = [
    {
      icon: Building,
      title: "Commercial Real Estate",
      description: "Comprehensive financing solutions for commercial properties and development projects."
    },
    {
      icon: TrendingUp,
      title: "Investment Banking",
      description: "Strategic financial advisory services for mergers, acquisitions, and capital raising."
    },
    {
      icon: Globe,
      title: "Private Lending",
      description: "Flexible private lending solutions tailored to your unique business requirements."
    },
    {
      icon: Users,
      title: "Trusted Partnership",
      description: "Building long-term relationships with our clients through transparent communication."
    }
  ]

  const trustLogos = [
    "Financial Institution",
    "FDIC Insured", 
    "SEC Registered",
    "BBB A+ Rated",
    "Industry Leader",
    "Award Winner"
  ]

  const keyPoints = [
    "Over 15 years of commercial finance expertise",
    "Nationwide lending capabilities",
    "Fast 30-45 day approval process",
    "Specialized industry knowledge"
  ]

  return (
    <div className="pt-16">
      {/* Hero Section - Redesigned */}
      <section className="relative bg-white dark:bg-charcoal-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/5 to-navy-900/10 dark:from-navy-800/10 dark:to-navy-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(30,58,138,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_30%_40%,rgba(30,58,138,0.1),transparent_70%)]"></div>
        
        <div className="relative container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-navy-800/10 dark:bg-navy-800/20 text-navy-800 dark:text-navy-300 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4 mr-2" />
                  Leading Commercial Finance Institution
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal-900 dark:text-white leading-tight">
                  We Collateralize
                  <span className="block text-navy-800 dark:text-navy-400">Your Future</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-charcoal-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                  Leading commercial finance, investment banking, and private lending 
                  institution serving businesses across the United States since 2007.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-3">
                {keyPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-navy-800 dark:text-navy-400 flex-shrink-0" />
                    <span className="text-charcoal-700 dark:text-gray-300">{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Link to="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
                  Get Funded Today
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/services" className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center">
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {stats.slice(0, 4).map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-charcoal-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-charcoal-600 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-navy-800 dark:bg-navy-700 text-white rounded-lg">
                        <stat.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-navy-800 dark:text-white mb-1">
                      <CounterAnimation 
                        end={stat.value} 
                        prefix={stat.prefix} 
                        suffix={stat.suffix}
                      />
                    </div>
                    <p className="text-charcoal-600 dark:text-gray-300 text-sm font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Additional Info Card */}
              <div className="bg-navy-800 dark:bg-navy-900 text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Miami Headquarters</h3>
                <p className="text-navy-100 dark:text-navy-200 mb-2">999 Brickell Ave, Suite 820</p>
                <p className="text-navy-100 dark:text-navy-200 mb-4">Miami, FL 33131</p>
                <div className="flex items-center text-navy-200 dark:text-navy-300 text-sm">
                  <Building className="w-4 h-4 mr-2" />
                  Serving clients nationwide
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-gray-50 dark:bg-charcoal-800 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal-900 dark:text-white mb-6">
              Trusted Financial Institution
            </h2>
            <p className="text-xl text-charcoal-600 dark:text-gray-300">
              With over 15 years of experience in commercial finance, we provide 
              innovative financial solutions that help businesses achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-charcoal-900 dark:text-white mb-6">
                Why Choose US Commerce Credit?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-navy-800 dark:bg-navy-700 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-charcoal-800 dark:text-gray-200 font-medium">
                      <strong className="text-charcoal-900 dark:text-white">$4.6B+ in closed financing deals</strong> across diverse industries
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-navy-800 dark:bg-navy-700 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-charcoal-800 dark:text-gray-200 font-medium">
                      <strong className="text-charcoal-900 dark:text-white">$150B in managed collateral</strong> with proven track record
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-navy-800 dark:bg-navy-700 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-charcoal-800 dark:text-gray-200 font-medium">
                      <strong className="text-charcoal-900 dark:text-white">Established in 2007</strong> with deep industry expertise
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-navy-800 dark:bg-navy-700 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-charcoal-800 dark:text-gray-200 font-medium">
                      <strong className="text-charcoal-900 dark:text-white">Miami headquarters</strong> serving clients nationwide
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-charcoal-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 dark:border-charcoal-600"
                >
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-10 w-10 text-navy-800 dark:text-navy-400" />
                  </div>
                  <h4 className="font-semibold text-charcoal-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-charcoal-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-charcoal-900 dark:text-white mb-8">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {trustLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="p-4 bg-white dark:bg-charcoal-800 rounded-lg shadow-md border border-gray-100 dark:border-charcoal-600 hover:shadow-lg transition-all duration-200"
                >
                  <p className="text-sm font-medium text-charcoal-800 dark:text-gray-200">
                    {logo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-800 dark:bg-navy-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-xl text-navy-100 dark:text-navy-200 mb-8">
              Get in touch with our expert team to discuss your financing needs 
              and discover how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="btn-primary bg-white text-navy-800 hover:bg-gray-100 hover:text-navy-900">
                Contact Us Today
              </Link>
              <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-navy-800">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage 