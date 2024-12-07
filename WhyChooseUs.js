import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Hassle-Free Claims",
      description:
        "Get your claims approved quickly with minimal paperwork and maximum transparency.",
      icon: "fas fa-file-invoice-dollar",
    },
    {
      title: "24/7 Customer Support",
      description: "Our team is always ready to assist you, anytime and anywhere.",
      icon: "fas fa-headset",
    },
    {
      title: "Affordable Policies",
      description: "Choose from a range of budget-friendly plans that suit your needs.",
      icon: "fas fa-money-check-alt",
    },
    {
      title: "Wide Network Coverage",
      description:
        "Access top hospitals and healthcare providers through our extensive network.",
      icon: "fas fa-hospital-alt",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-350 py-16 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-8 tracking-wider">
          Why Choose Us?
        </h2>
        <p className="text-center text-lg mb-12 font-light">
          Experience the benefits of reliable health insurance services tailored to you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-blue-800"
            >
              {/* Gradient Background for Icon */}
              <div className="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full p-5 shadow-lg">
                <i className={`${feature.icon} text-3xl text-white`} />
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-semibold text-center mb-4">
                  {feature.title}
                </h3>
                <p className="text-center text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
