import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock,
  Send,
  Building,
  DollarSign,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    fundingType: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState(null) // null, 'sending', 'success', 'error'

  const fundingTypes = [
    'Commercial Real Estate Loans',
    'Mergers & Acquisitions',
    'Oil, Gas & Mineral Financing',
    'Land Acquisition',
    'Economic Development Projects',
    'Investment Banking',
    'Private Lending',
    'Other'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Simulate form submission
    try {
      // In a real application, you would send this data to your backend
      // For demo purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      setFormStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        fundingType: '',
        message: ''
      })
    } catch (error) {
      setFormStatus('error')
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@uscommercecredit.com",
      link: "mailto:contact@uscommercecredit.com",
      description: "Send us your inquiry anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(305) 555-0123",
      link: "tel:+13055550123",
      description: "Speak with our experts"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "999 Brickell Ave, Suite 820\nMiami, FL 33131",
      link: "https://maps.google.com/?q=999+Brickell+Ave,+Suite+820,+Miami,+FL+33131",
      description: "Visit our headquarters"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday\n9:00 AM - 6:00 PM EST",
      description: "We're here to help"
    }
  ]

  const quickStats = [
    { label: "Financing Closed", value: "$4.6B+" },
    { label: "Managed Collateral", value: "$150B" },
    { label: "Years in Business", value: "15+" },
    { label: "Average Approval Time", value: "30-45 Days" }
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
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-navy-100 mb-8">
                Ready to explore your financing options? Get in touch with our expert team 
                for a personalized consultation and customized solution.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {quickStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-navy-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white dark:bg-charcoal-900 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-charcoal-900 dark:text-white mb-6">
                Send Us Your Inquiry
              </h2>
              <p className="text-lg text-charcoal-600 dark:text-gray-300 mb-8">
                Fill out the form below and our team will get back to you within 24 hours 
                to discuss your financing requirements.
              </p>

              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <div className="flex items-center space-x-2 text-green-800 dark:text-green-300">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-green-700 dark:text-green-400 mt-1">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <div className="flex items-center space-x-2 text-red-800 dark:text-red-300">
                    <AlertCircle className="h-5 w-5" />
                    <span className="font-medium">Error sending message</span>
                  </div>
                  <p className="text-red-700 dark:text-red-400 mt-1">
                    Please try again or contact us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal-900 dark:text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-charcoal-600 rounded-lg focus:ring-2 focus:ring-navy-800 focus:border-transparent bg-white dark:bg-charcoal-800 text-charcoal-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-charcoal-900 dark:text-white mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-charcoal-600 rounded-lg focus:ring-2 focus:ring-navy-800 focus:border-transparent bg-white dark:bg-charcoal-800 text-charcoal-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-900 dark:text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-charcoal-600 rounded-lg focus:ring-2 focus:ring-navy-800 focus:border-transparent bg-white dark:bg-charcoal-800 text-charcoal-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="fundingType" className="block text-sm font-medium text-charcoal-900 dark:text-white mb-2">
                    Funding Type *
                  </label>
                  <select
                    id="fundingType"
                    name="fundingType"
                    value={formData.fundingType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-charcoal-600 rounded-lg focus:ring-2 focus:ring-navy-800 focus:border-transparent bg-white dark:bg-charcoal-800 text-charcoal-900 dark:text-white"
                  >
                    <option value="">Select funding type</option>
                    {fundingTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal-900 dark:text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-charcoal-600 rounded-lg focus:ring-2 focus:ring-navy-800 focus:border-transparent bg-white dark:bg-charcoal-800 text-charcoal-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Please describe your financing needs, project details, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-charcoal-900 dark:text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-charcoal-600 dark:text-gray-300 mb-8">
                Prefer to speak directly? Our team of financial experts is available 
                to discuss your needs and provide immediate assistance.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-navy-800 dark:bg-navy-700 text-white rounded-full">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-charcoal-900 dark:text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-charcoal-600 dark:text-gray-300 mb-1 whitespace-pre-line">
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-navy-800 dark:text-navy-400 hover:text-navy-900 dark:hover:text-navy-300 transition-colors duration-200"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          info.content
                        )}
                      </p>
                      <p className="text-sm text-charcoal-500 dark:text-gray-400">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

                             <div className="mt-8 p-6 bg-gray-50 dark:bg-charcoal-800 rounded-xl border border-gray-100 dark:border-charcoal-600">
                <h3 className="text-xl font-semibold text-charcoal-900 dark:text-white mb-4">
                  Why Choose US Commerce Credit?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-navy-800 dark:text-navy-400" />
                    <span className="text-charcoal-700 dark:text-gray-200">$4.6B+ in closed financing deals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-navy-800 dark:text-navy-400" />
                    <span className="text-charcoal-700 dark:text-gray-200">15+ years of industry expertise</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-navy-800 dark:text-navy-400" />
                    <span className="text-charcoal-700 dark:text-gray-200">Fast 30-45 day approval process</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 dark:bg-charcoal-800 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal-900 dark:text-white mb-6">
              Visit Our Miami Headquarters
            </h2>
            <p className="text-xl text-charcoal-600 dark:text-gray-300 max-w-3xl mx-auto">
              Located in the heart of Miami's financial district on prestigious Brickell Avenue, 
              our headquarters serves as the central hub for our nationwide operations.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
                         className="bg-white dark:bg-charcoal-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-charcoal-600"
          >
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.7267678636827!2d-80.19408168455386!3d25.76168198367289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b665b8a8a8a7%3A0x1234567890123456!2s999%20Brickell%20Ave%2C%20Miami%2C%20FL%2033131!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="US Commerce Credit Headquarters Location"
                className="rounded-t-xl"
              ></iframe>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-navy-800 dark:text-navy-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-charcoal-900 dark:text-white mb-1">Address</h3>
                  <p className="text-charcoal-600 dark:text-gray-300">999 Brickell Ave, Suite 820<br />Miami, FL 33131</p>
                </div>
                <div className="text-center">
                  <Building className="h-8 w-8 text-navy-800 dark:text-navy-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-charcoal-900 dark:text-white mb-1">Building</h3>
                  <p className="text-charcoal-600 dark:text-gray-300">Premium office space<br />in financial district</p>
                </div>
                <div className="text-center">
                  <Clock className="h-8 w-8 text-navy-800 dark:text-navy-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-charcoal-900 dark:text-white mb-1">Parking</h3>
                  <p className="text-charcoal-600 dark:text-gray-300">Validated parking<br />available on-site</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage 