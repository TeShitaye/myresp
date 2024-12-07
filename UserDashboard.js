import React, { useState } from "react";

const UserDashboard = () => {
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    selectedHospital: "City Hospital",
    selectedServices: ["Emergency Care", "Outpatient Services"],
  });

  const [hospitals] = useState(["City Hospital", "Green Valley Clinic", "Oceanview Health Center"]);
  const [availableServices] = useState([
    "Emergency Care",
    "Doctor Appointments",
    "Diagnostic Tests",
    "Inpatient Care",
    "Mental Health Support",
  ]);

  const [insuranceStatus] = useState({
    claims: [
      { id: 1, status: "Approved", date: "2024-12-01", amount: "$500" },
      { id: 2, status: "Pending", date: "2024-12-03", amount: "$1200" },
    ],
    fees: "$100/month",
  });

  const handleEditProfile = () => {
    // Add functionality for editing profile details.
    alert("Profile editing functionality coming soon!");
  };

  const handleSelectHospital = (hospital) => {
    setUserDetails((prevDetails) => ({ ...prevDetails, selectedHospital: hospital }));
  };

  const handleToggleService = (service) => {
    setUserDetails((prevDetails) => {
      const isSelected = prevDetails.selectedServices.includes(service);
      const updatedServices = isSelected
        ? prevDetails.selectedServices.filter((s) => s !== service)
        : [...prevDetails.selectedServices, service];
      return { ...prevDetails, selectedServices: updatedServices };
    });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>

      {/* Profile Management Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Profile Management</h2>
        <p><strong>Name:</strong> {userDetails.name}</p>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Phone:</strong> {userDetails.phone}</p>
        <p><strong>Selected Hospital:</strong> {userDetails.selectedHospital}</p>
        <p><strong>Selected Services:</strong> {userDetails.selectedServices.join(", ")}</p>
        <button
          onClick={handleEditProfile}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Edit Profile
        </button>
      </div>

      {/* Hospital and Service Selection Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Hospital and Service Selection</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Select a Hospital</h3>
          {hospitals.map((hospital) => (
            <button
              key={hospital}
              onClick={() => handleSelectHospital(hospital)}
              className={`px-4 py-2 mr-2 mb-2 rounded ${
                userDetails.selectedHospital === hospital
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {hospital}
            </button>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Select Services</h3>
          {availableServices.map((service) => (
            <button
              key={service}
              onClick={() => handleToggleService(service)}
              className={`px-4 py-2 mr-2 mb-2 rounded ${
                userDetails.selectedServices.includes(service)
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      {/* Insurance Status Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Insurance Status</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Active Claims</h3>
          {insuranceStatus.claims.length > 0 ? (
            <ul>
              {insuranceStatus.claims.map((claim) => (
                <li key={claim.id} className="mb-2">
                  <strong>Date:</strong> {claim.date} - <strong>Status:</strong> {claim.status} -{" "}
                  <strong>Amount:</strong> {claim.amount}
                </li>
              ))}
            </ul>
          ) : (
            <p>No active claims.</p>
          )}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Payment and Fees</h3>
          <p><strong>Monthly Fee:</strong> {insuranceStatus.fees}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
