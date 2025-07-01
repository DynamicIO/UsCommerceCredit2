import React from 'react'
import { Link } from 'react-router-dom'
import { Building2, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 section-padding">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-silver-300" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">US Commerce Credit</span>
                <span className="text-sm text-silver-400 -mt-1">Corp.</span>
              </div>
            </div>
            <p className="text-lg font-medium text-silver-300 mb-4">
              "We Collateralize Your Future"
            </p>
            <p className="text-silver-400 mb-4 max-w-md">
              Leading commercial finance, investment banking, and private lending institution 
              serving businesses across the United States since 2007.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-silver-400">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">999 Brickell Ave, Suite 820, Miami, FL 33131</span>
              </div>
              <div className="flex items-center space-x-2 text-silver-400">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:contact@uscommercecredit.com" 
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  contact@uscommercecredit.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-silver-400 hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-silver-400 hover:text-white transition-colors duration-200"
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="block text-silver-400 hover:text-white transition-colors duration-200"
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="block text-silver-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <div className="space-y-2 text-sm">
              <p className="text-silver-400">Commercial Real Estate Loans</p>
              <p className="text-silver-400">Mergers & Acquisitions</p>
              <p className="text-silver-400">Oil, Gas & Mineral Financing</p>
              <p className="text-silver-400">Land Acquisition</p>
              <p className="text-silver-400">Economic Development</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-charcoal-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-silver-400">
              <p>&copy; {currentYear} US Commerce Credit, Corp. All rights reserved.</p>
              <div className="flex space-x-4">
                <span className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Privacy Policy
                </span>
                <span className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Terms of Service
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-silver-400">
                <span className="font-medium">$4.6B+</span> in closed deals
              </div>
              <div className="text-sm text-silver-400">
                <span className="font-medium">$150B</span> managed collateral
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 