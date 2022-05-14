import React from "react";

import "./ScrollBox.css";

const ScrollBox: React.FC<IScrollBox> = ({ children }) => {
  return <article className="scrollBoxContainer">{children}</article>;
};

export default ScrollBox;
