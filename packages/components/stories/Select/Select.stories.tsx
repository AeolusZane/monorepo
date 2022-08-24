import React from "react";

import Select from "./index";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Component/Select",
  compoent: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  return <Select />;
};

export const Basic = Template.bind({});
Basic.args = {};
