import React, { useState } from "react";
import { useController, useForm } from "react-hook-form";
import Composer from "./index";

export default {
  title: "Components/forms",
  component: Composer,
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
    <Composer
      isOpen={isOpen}
      onSubmit={wrappedOnSubmit}
      toggleInputOpen={toggleInputOpen}
      btnText="Add a card"
      submitBtnText="Add card"
    >
      <input onChange={onChange} value={value} placeholder="Enter description..." />
    </Composer>
  );
};

export const ComposerComponent = Template.bind({});
