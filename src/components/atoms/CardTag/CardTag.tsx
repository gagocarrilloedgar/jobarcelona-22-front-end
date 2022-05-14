import React from "react";
import "./CardTag.css";

// this component renders a single tag, the value is given throught the children
// styles don't let the text expand too much.
const CardTag: React.FC<IChildren> = ({ children }) => {
  return <span className="tagWrapper">{children}</span>;
};

export default CardTag;
