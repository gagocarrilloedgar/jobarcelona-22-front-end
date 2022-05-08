import React, { useState } from "react";
// atom components
import CardTitle from "../../atoms/CardTitle/CardTitle";
import CardDescription from "../../atoms/CardDescription/CardDescription";
import CardTag from "../../atoms/CardTag/CardTag";
// styles
import "./Card.css";

interface Props {
  title: string;
  description: string;
  tags: [] | Array<string>;
}

const Card: React.FC<Props> = ({ title, description, tags }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleCardClick = () => {
    setIsFocused(!isFocused);
    // do things here
  };
  return (
    <section
      role="button"
      onClick={handleCardClick}
      className={isFocused ? "cardWrapper cardFocused" : "cardWrapper"}
    >
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <div className="tagContainer">
        {tags.map((tag) => (
          <CardTag key={tag}>{tag}</CardTag>
        ))}
      </div>
    </section>
  );
};

export default Card;
