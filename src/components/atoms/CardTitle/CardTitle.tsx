import React from "react";
// this component renders the title of the card, the value passes for children
const CardTitle: React.FC<IChildren> = ({ children }) => {
  return <h2 className="Title">{children}</h2>;
};

export default CardTitle;
