import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardTag from "./CardTag";

const componentInfo = {
  title: "CardTag",
  component: CardTag,
} as ComponentMeta<typeof CardTag>;

export default componentInfo;

const Template: ComponentStory<typeof CardTag> = (args) => (
  <CardTag {...args} />
);

export const Tag = Template.bind({});

Tag.args = {
  children: "Tag example",
};
