import React from "react";
import styled from "styled-components";
import SiderMenu from "./index";

export default {
  title: "components/menus/SiderMenu",
  component: SiderMenu,
  argTypes: {
    onSubmit: "function",
  },
};

const Template = () => {
  return (
    <Container>
      <SiderMenu />
    </Container>
  );
};

export const Default = Template.bind({});

const Container = styled.div`
  width: 300px;
`;
