import { ComponentStory, ComponentMeta } from "@storybook/react";

import CardTitle from "./CardTitle";

const componentInfo = {
  title: "Design System/Atoms/CardTitle",
  component: CardTitle,
} as ComponentMeta<typeof CardTitle>;

export default componentInfo;

const Template: ComponentStory<typeof CardTitle> = (args) => (
  <CardTitle {...args} />
);

export const Title = Template.bind({});

Title.args = {
  children: "Example",
};
