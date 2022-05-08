import React from "react";
import Card from "../../molecules/Card/Card";

import "./ScrollBox.css";

const ScrollBox = () => {
  return (
    <article className="scrollBoxContainer">
      <Card
        description="Example description"
        tags={["Article", "More Articles"]}
        title="Example"
      />
    </article>
  );
};

export default ScrollBox;
