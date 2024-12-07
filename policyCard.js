import React from "react";
import PropTypes from "prop-types";
import "../styles/policyCard.css";

const PolicyCard = ({ title, description, payment }) => {
  // Adding checks to ensure we are receiving valid data
  if (!title || !description || !payment) {
    console.error("Missing prop data in PolicyCard:", { title, description, payment });
    return null;
  }

  return (
    <div className="policy-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="payment">{payment}</p>
    </div>
  );
};

PolicyCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  payment: PropTypes.string.isRequired,
};

export default PolicyCard;
