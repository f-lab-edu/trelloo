import React, { Spin } from "antd";
import { useController, useForm } from "react-hook-form";
import { MutationOptions } from "@/interfaces/httpRequest";
import { AddCardRequest } from "@/queries/cards/interface";
import Composer from "@components/forms/Composer";
import * as S from "./style";

interface Props {
  isLoading: boolean;
  isCardInputOpened: boolean;
  onCardInputToggle: () => void;
  listId: string;
  onAddCard: (params: AddCardRequest, options?: MutationOptions) => void;
}

const CardComposer = ({ isCardInputOpened, onCardInputToggle, listId, onAddCard, isLoading }: Props) => {
  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      description: "",
    },
    mode: "onSubmit",
  });

  const {
    field: { onChange, value },
  } = useController({ name: "description", control, rules: { required: true } });

  const handleAddCard = () => {
    onAddCard(
      {
        description: value,
        listId,
      },
      {
        onSuccess() {
          reset();
        },
      },
    );
  };

  const wrappedOnSubmit = handleSubmit(handleAddCard);

  return (
    <Composer
      isOpen={isCardInputOpened}
      toggleInputOpen={onCardInputToggle}
      btnText="Add a card"
      submitBtnText="Add card"
      onSubmit={wrappedOnSubmit}
    >
      <Spin spinning={isLoading}>
        <S.Card>
          <input onChange={onChange} value={value} placeholder="Enter a title for this card..." />
        </S.Card>
      </Spin>
    </Composer>
  );
};

export default CardComposer;
