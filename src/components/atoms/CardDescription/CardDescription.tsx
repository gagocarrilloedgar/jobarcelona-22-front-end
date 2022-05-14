import React from "react";
// this component renders the description of the card, the value passes for children
const CardDescription: React.FC<IChildren> = ({ children }) => {
  return <p>{children}</p>;
};

export default CardDescription;
