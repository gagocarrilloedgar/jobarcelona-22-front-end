import React from "react";
import "./CardDescription.css";
const CardDescription: React.FC<IChildren> = ({ children }) => {
  return <p>{children}</p>;
};

export default CardDescription;
