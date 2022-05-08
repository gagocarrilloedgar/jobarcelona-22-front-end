import React from "react";
import CardTitle from "../../atoms/CardTitle/CardTitle";

interface Props {
  title: string;
}

const Card: React.FC<Props> = ({ title }) => {
  return (
    <section className="cardWrapper">
      <CardTitle>{title}</CardTitle>
    </section>
  );
};

export default Card;
