import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardDescription from "./CardDescription";

const componentInfo = {
  title: "Design System/Atoms/CardDescrption",
  component: CardDescription,
} as ComponentMeta<typeof CardDescription>;

export default componentInfo;

const Template: ComponentStory<typeof CardDescription> = (args) => (
  <CardDescription {...args} />
);

export const Description = Template.bind({});

Description.args = {
  children: "This is the card description",
};
