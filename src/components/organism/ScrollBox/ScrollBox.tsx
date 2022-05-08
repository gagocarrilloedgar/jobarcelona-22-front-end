import React from "react";
import Card from "../../molecules/Card/Card";

import "./ScrollBox.css";

const ScrollBox: React.FC = () => {
  return (
    <article className="scrollBoxContainer">
      <Card
        title="Crew"
        description="Example description"
        tags={["Article", "More Articles"]}
      />
      <Card
        title="Family"
        description="Example description"
        tags={["Article", "More Articles"]}
      />
      <Card
        title="Friends"
        description="Example description"
        tags={["Article", "More Articles"]}
      />
      <Card
        title="Others"
        description="Example description"
        tags={["Article", "More Articles"]}
      />
    </article>
  );
};

export default ScrollBox;
