import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // For social icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Brand and Description */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-semibold text-orange-500 mb-1">Tenachin</h1>
            <p className="text-white text-lg font-light mb-4">
              Simplifying your health insurance documentation, one step at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-2xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/register"
                  className="no-underline text-gray-400 hover:text-yellow-500 focus:outline-none transition duration-300" 
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="/renew"
                  className="no-underline text-gray-400 hover:text-yellow-500 focus:outline-none transition duration-300"
                >
                  Renew Policy
                </a>
              </li>
              <li>
                <a
                  href="/claims"
                  className="no-underline text-gray-400 hover:text-yellow-500 focus:outline-none transition duration-300"
                >
                  Claims
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="no-underline text-gray-400 hover:text-yellow-500 focus:outline-none transition duration-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="flex flex-col items-start">
            <h4 className="text-2xl font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/emergency-care"
                  className="no-underline text-gray-400 hover:text-yellow-500 focus:outline-none transition duration-300"
                >
                  Emergency Care
                </a>
              </li>
              <li>
                <a
                  href="/doctor-appointments"
                  className="no-underline text-gray-400 hover:text-yellow-500 focus:outline-none transition duration-300"
                >
                  Doctor Appointments
                </a>
              </li>
              <li>
                <a
                  href="/diagnostic-tests"
                  className="no-underline text-gray-400 hover:text-yellow-500 focus:outline-none transition duration-300"
                >
                  Diagnostic Tests and Lab Work
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-start">
            <h4 className="text-2xl font-semibold text-white mb-4">Contact Us</h4>
            <p className="text-gray-400 hover:text-yellow-400 transition duration-300 mb-2">📞 +251-941208343</p>
            <p className="text-gray-400 hover:text-yellow-400 transition duration-300">📧 support@tenachin.com</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://instagram.com"
            className="text-3xl text-white hover:text-yellow-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            className="text-3xl text-white hover:text-yellow-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            className="text-3xl text-white hover:text-yellow-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Tenachin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
