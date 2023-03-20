import React, { useState } from "react";
import styled from "styled-components";
import DrawerContainer from "@components/Drawers/DrawerContainer";

export default {
  title: "Common/DrawerContainer",
  component: DrawerContainer,
  argTypes: {
    text: { text: "color" },
  },
};

const Template = (args: {
  isOpened: boolean;
  isOpenedFromLeft: boolean;
  children: React.ReactNode;
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleDrawer = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Container>
      <Button onClick={handleDrawer}>open drawer</Button>
      <DrawerContainer {...args} isOpened={isOpened} isOpenedFromLeft={false} />
    </Container>
  );
};

export const Primary = Template.bind({});

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Button = styled.button`
  position: absolute;
  left: 500px;
`;
