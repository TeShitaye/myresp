import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/main_logo.png'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  // Scroll behavior for hiding/showing navbar
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false); // Hide navbar on scroll down
    } else {
      setIsVisible(true); // Show navbar on scroll up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full h-16 shadow-lg transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-18 h-18 md:w-40 md:h-40 object-contain transition-transform duration-200 hover:scale-105"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "Profile", path: "/register" },
            { name: "Policies", path: "/policies" },
            { name: "Claims", path: "/claims" },
            { name: "About Us", path: "/about" },
            { name: "Services", path: "/services" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`no-underline text-lg font-bold tracking-wide transition-all duration-300 ${
                isActive(link.path)
                  ? "text-yellow-500 scale-105"
                  : "text-white hover:text-yellow-500 hover:scale-110"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <div>
          <Link
            to="/login"
            className="no-underline px-4 py-2 bg-blue-900 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-yellow-500 hover:text-blue-900 transition-all duration-300"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-center mt-4 space-x-4">
        {[
          { name: "Home", path: "/" },
          { name: "Profile", path: "/register" },
          { name: "Policies", path: "/policies" },
          { name: "Claims", path: "/claims" },
          { name: "About Us", path: "/about" },
          { name: "Services", path: "/services" },
        ].map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-sm font-medium ${
              isActive(link.path)
                ? "text-yellow-500"
                : "text-blue-900 hover:text-yellow-500"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
