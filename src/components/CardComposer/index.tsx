import React, { Spin } from "antd";
import { useController, useForm } from "react-hook-form";
import { type AddCardRequest } from "@/queries/cards/interface";
import * as S from "./style";
import Composer from "@components/forms/Composer";

interface Props {
  isLoading: boolean;
  isCardInputOpened: boolean;
  onCardInputToggle: () => void;
  listId: string;
  onAddCard: (params: AddCardRequest) => Promise<void>;
}

const CardComposer = ({ isCardInputOpened, onCardInputToggle, listId, onAddCard, isLoading }: Props) => {
  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      description: "",
    },
    mode: "onSubmit"
  });

  const {
    field: { onChange, value },
  } = useController({ name: "description", control });

  const handleAddCard = async() => {
    await onAddCard({
      description: value,
      listId,
    });
    reset();
  };

  const wrappedOnSubmit = handleSubmit(handleAddCard)

  return (
    <Composer isOpen={isCardInputOpened} toggleInputOpen={onCardInputToggle} btnText="Add a card" submitBtnText="Add card" onSubmit={wrappedOnSubmit}>
      <Spin spinning={isLoading}>
        <S.Card>
          <input onChange={onChange} value={value} placeholder="Enter a title for this card..." />
        </S.Card>
      </Spin>
    </Composer>
  );
};

export default CardComposer;
