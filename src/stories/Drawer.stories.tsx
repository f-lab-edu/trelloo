import React, { useState } from "react";
import styled from "styled-components";
import Drawer from "@components/Drawer";
import MenuDrawer from "@components/Drawer/MenuDrawer";

export default {
  title: "Example/Drawer",
  component: Drawer,
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
      <button onClick={handleDrawer}>open drawer</button>
      <Drawer {...args} isOpened={isOpened} isOpenedFromLeft={false} />
    </Container>
  );
};

export const Primary = Template.bind({});

const SecondaryTemplate = (args: {
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
      <button onClick={handleDrawer}>open drawer</button>
      <Drawer {...args} isOpened={isOpened} isOpenedFromLeft={false}>
        <MenuDrawer onClose={handleDrawer} />
      </Drawer>
    </Container>
  );
};

export const Secondary = SecondaryTemplate.bind({});

const ThirdTemplate = (args: {
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
      <Drawer {...args} isOpened={isOpened} isOpenedFromLeft={true}>
        <MenuDrawer onClose={handleDrawer} />
      </Drawer>
    </Container>
  );
};

export const Third = ThirdTemplate.bind({});

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
