import React from "react";
import "../../css/BaseButton.css";
const BaseButton = ({ label, color }) => {
  return <button className={`base-button ${color}`}>{label}</button>;
};

export default BaseButton;
