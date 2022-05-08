import React from "react";

const CardTitle: React.FC<IChildren> = ({ children }) => {
  return <h2 className="Title">{children}</h2>;
};

export default CardTitle;
