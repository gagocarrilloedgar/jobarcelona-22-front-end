import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./Card";

const componentInfo = {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export default componentInfo;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardExample = Template.bind({});

CardExample.args = {
  title: "Party 🥳",
  description: "This is party description",
  tags: ["Laughs", "party"],
};
