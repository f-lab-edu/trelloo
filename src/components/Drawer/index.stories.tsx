import React, { useState } from "react";
import Drawer from "@components/Drawer";

export default {
  title: "components/Drawer",
  component: Drawer,
};

const Template = () => {
  const [, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  return <Drawer isOpen onClose={onClose} />;
};

export const Default = Template.bind({});
