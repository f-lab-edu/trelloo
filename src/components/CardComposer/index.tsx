import React, { Spin } from "antd";
import { useForm } from "react-hook-form";
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
  const { reset, register, handleSubmit } = useForm({
    defaultValues: {
      description: "",
    },

    mode: "onSubmit",
  });

  const handleAddCard = ({ description }: { description: string }) => {
    onAddCard(
      {
        description,
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
          <input {...register("description", { required: true })} placeholder="Enter a title for this card..." />
        </S.Card>
      </Spin>
    </Composer>
  );
};

export default CardComposer;
