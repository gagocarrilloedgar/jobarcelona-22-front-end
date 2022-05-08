import React from "react";
import "./CardTag.css";
const CardTag: React.FC<IChildren> = ({ children }) => {
  return <span className="tagWrapper">{children}</span>;
};

export default CardTag;
