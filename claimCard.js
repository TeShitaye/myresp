import React from "react";

const ClaimCard = ({ title, description, date, status, payment }) => {
  return (
    <div className="claim-card">
      <h3 className="claim-card-title">{title}</h3>
      <p className="claim-card-description">{description}</p>
      <p className="claim-card-date">Date Filed: {date}</p>
      <p className={`claim-card-status ${status.toLowerCase()}`}>
        Status: {status}
      </p>
      <p className="claim-card-payment">
        <strong>Payment Details:</strong> {payment}
      </p>
      <button className="claim-btn">View Details</button>
    </div>
  );
};

export default ClaimCard;
