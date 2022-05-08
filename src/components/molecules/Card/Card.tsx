import React from "react";
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
  return (
    <section className="cardWrapper">
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
