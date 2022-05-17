import React from "react";

import "./ScrollBox.css";

const ScrollBox: React.FC<IScrollBox> = ({ children }) => {
  return <section className="scrollBoxContainer">{children}</section>;
};

export default ScrollBox;
