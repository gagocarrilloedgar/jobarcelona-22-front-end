import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardDescription from "./CardDescription";

const componentInfo = {
  title: "CardDescription",
  component: CardDescription,
} as ComponentMeta<typeof CardDescription>;

export default componentInfo;

const Template: ComponentStory<typeof CardDescription> = (args) => (
  <CardDescription {...args} />
);

export const Example = Template.bind({});

Example.args = {
  children: "This is the card description",
};
