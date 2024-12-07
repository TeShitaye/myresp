import React from "react";
import "../styles/Dashboard.css";
import backgroundImage from "../assets/dashboard.jpg"

const Dashboard = () => {
  return (
    <div
      className="dashboard "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#fff",

      }}
    >
        <div className="absolute inset-0 bg-black opacity-35"></div>

{/* Content goes here */}
<div className="relative z-10 text-white">
  {/* Your dashboard content */}
  <div className="dashboard-overlay flex flex-col justify-center items-center text-center h-full px-4 sm:px-10">
        {/* Main Content */}
        <div className="dashboard-header mb-8">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Get Started with Health Coverage
          </h1>
          <p className="text-lg text-white mb-6">
            Join us to unlock full access to your personalized health insurance tools and resources. <br/> <br/>
          </p>
          <a
            href="/register"  // Link to the registration page
            className="no-underline px-8 py-3 bg-white text-blue-400  text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-4-text-white transition-all duration-300"
          >
            Register Now
          </a>
        </div>
      </div>
</div>
      
    </div>
  );
};

export default Dashboard;
