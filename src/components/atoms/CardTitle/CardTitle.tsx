import React, { ReactNode } from "react";

interface Props {
  children: JSX.Element[] | JSX.Element | ReactNode;
}

const CardTitle: React.FC<Props> = ({ children }) => {
  return <h3 className="Title">{children}</h3>;
};

export default CardTitle;
