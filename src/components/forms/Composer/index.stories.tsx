import React, { useState } from "react";
import { useController, useForm } from "react-hook-form";
import styled from "styled-components";
import Component from "./index";

export default {
  title: "common/forms/Composer",
  component: Component,
};

const Template = () => {
  const [isOpen, setOpen] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: { description: "" },
    mode: "onSubmit",
  });

  const {
    field: { onChange, value },
  } = useController({
    name: "description",
    control,
    rules: { required: true },
  });

  const handleAddCard = async () => {};
  const toggleInputOpen = () => {
    setOpen(!isOpen);
  };

  const wrappedOnSubmit = handleSubmit(handleAddCard);

  return (
    <Container>
      <Component
        isOpen={isOpen}
        onSubmit={wrappedOnSubmit}
        toggleInputOpen={toggleInputOpen}
        btnText="Add a card"
        submitBtnText="Add card"
      >
        <input onChange={onChange} value={value} placeholder="Enter description..." />
      </Component>
    </Container>
  );
};

export const Composer = Template.bind({});

const Container = styled.div`
  width: 300px;
`;
