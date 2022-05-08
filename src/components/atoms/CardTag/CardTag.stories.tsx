import React from "react";
// types
import { ComponentStory, ComponentMeta } from "@storybook/react";
// component
import CardTag from "./CardTag";

const componentInfo = {
  title: "Design System/Atoms/CardTag",
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
