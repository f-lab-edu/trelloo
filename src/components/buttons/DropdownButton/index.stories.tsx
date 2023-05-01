import React from "react";
import { ThunderboltOutlined } from "@ant-design/icons";
import DropdownButton from "./index";

export default {
  title: "components/buttons/DropdownButton",
  component: DropdownButton,
};

const Template = () => {
  return <DropdownButton text="dropdown button" Icon={<ThunderboltOutlined />} Dropdown={<div>dropdown</div>} />;
};

export const Default = Template.bind({});
