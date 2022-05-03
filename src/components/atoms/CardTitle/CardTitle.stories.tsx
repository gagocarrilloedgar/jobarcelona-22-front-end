import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardTitle from "./CardTitle";

const componentInfo = {
  title: "CardTitle",
  component: CardTitle,
} as ComponentMeta<typeof CardTitle>;

export default componentInfo;

const Template: ComponentStory<typeof CardTitle> = (args) => (
  <CardTitle {...args} />
);

export const Example = Template.bind({});

Example.args = {
  children: "Example",
};
