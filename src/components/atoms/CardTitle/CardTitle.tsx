import React, { ReactNode } from "react";

interface Props {
  children: JSX.Element[] | JSX.Element | ReactNode;
}

const CardTitle: React.FC<Props> = ({ children }) => {
  return <h2 className="Title">{children}</h2>;
};

export default CardTitle;
