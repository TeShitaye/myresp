import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/backgr.jpg";

const Services = () => {
  const services = [
    {
      id: "network-access",
      title: "Hospital Network Access",
      description: "Access a wide network of trusted hospitals and healthcare providers.",
      //icon: networkIcon,
      link: "/hospital-network",
    },
    {
      id: "claims-management",
      title: "Claims Management",
      description: "Easily file and track claims for medical expenses and treatments.",
      //icon: claimsIcon,
      link: "/claims-management",
    },
    {
      id: "pre-authorization",
      title: "Pre-Authorization Support",
      description: "Get pre-approval for treatments and procedures without hassle.",
      //icon: preAuthIcon,
      link: "/pre-authorization",
    },
    {
      id: "document-management",
      title: "Document Management",
      description: "Securely share and manage your insurance and hospital documents.",
      //icon: documentIcon,
      link: "/document-management",
    },
    {
      id: "emergency-assistance",
      title: "Emergency Assistance",
      description: "Round-the-clock support for medical emergencies.",
      //icon: emergencyIcon,
      link: "/emergency-assistance",
    },
    {
      id: "wellness-benefits",
      title: "Wellness Benefits",
      description: "Stay healthy with wellness programs and preventive care discounts.",
     // icon: wellnessIcon,
      link: "/wellness-benefits",
    },
    {
      id: "telemedicine-services",
      title: "Telemedicine Services",
      description: "Connect with doctors online from the comfort of your home.",
      //icon: telemedicineIcon,
      link: "/telemedicine",
    },
    {
      id: "customer-support",
      title: "Customer Support",
      description: "24/7 assistance for all your insurance and healthcare queries.",
      //icon: supportIcon,
      link: "/customer-support",
    },
    {
      id: "policy-management",
      title: "Policy Management Tools",
      description: "Easily renew, upgrade, or modify your insurance policy online.",
      //icon: policyIcon,
      link: "/policy-management",
    },
  ];

  return (
    <div
      className="relative pt-20 text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "150vh",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 px-6 pb-20">
        <h1 className="text-5xl font-bold text-center mb-8">Our Services</h1>
        <p className="text-lg text-center mb-12">
          Explore the services we provide to connect you with quality healthcare.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white text-black rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <img src={service.icon} alt={service.title} className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-center mb-4">{service.title}</h2>
              <p className="text-center text-gray-700 mb-6">{service.description}</p>
              <Link to={service.link}>
                <button className="w-full px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
                  Learn More
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
