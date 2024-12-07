import React from "react";
import { Link } from "react-router-dom";

const ServiceSummary = () => {
  const featuredServices = [
    {
      id: "claims-management",
      title: "Claims Management",
      description: "File and track claims easily and efficiently.",
      link: "/claims-management",
    },
    {
      id: "emergency-assistance",
      title: "Emergency Assistance",
      description: "24/7 support for medical emergencies.",
      link: "/emergency-assistance",
    },
    {
      id: "telemedicine-services",
      title: "Telemedicine Services",
      description: "Connect with doctors online anytime.",
      link: "/telemedicine",
    },
  ];

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6">Service Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredServices.map((service) => (
          <div key={service.id} className="p-4 bg-white rounded shadow hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link to={service.link}>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                View More
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/services">
          <button className="px-6 py-3 bg-yellow-600 text-white rounded hover:bg-yellow-700">
            View All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceSummary;
