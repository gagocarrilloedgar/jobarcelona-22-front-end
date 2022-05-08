import React from "react";
// types
import { ComponentStory, ComponentMeta } from "@storybook/react";
// component
import ScrollBox from "./ScrollBox";

const componentInfo = {
  title: "Design System/Organism/ScrollBox",
  component: ScrollBox,
} as ComponentMeta<typeof ScrollBox>;

export default componentInfo;

const Template: ComponentStory<typeof ScrollBox> = (args) => (
  <ScrollBox {...args} />
);

export const ScrollBoxExample = Template.bind({});
