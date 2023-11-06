import React, { useState } from "react";
import styled from "styled-components";
import Header from "@components/Header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    isBlue: false,
  },
};

const Template = (args: { isBlue?: boolean }) => {
  return <Header />;
};

export const Primary = Template.bind({});
