import React, { useState } from "react";
// atom components
import CardTitle from "../../atoms/CardTitle/CardTitle";
import CardDescription from "../../atoms/CardDescription/CardDescription";
import CardTag from "../../atoms/CardTag/CardTag";
// styles
import "./Card.css";

const Card: React.FC<ICard> = ({
  title = "Default card",
  description = "Default description",
  tags,
}) => {
  // state to check if card is focused
  const [isFocused, setIsFocused] = useState(false);

  const handleCardClick = () => {
    setIsFocused(!isFocused);
    // do things here
  };

  return (
    <section
      role="button"
      tabIndex={0}
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
