import { createContext } from "react";
import {
  useAddCardMutation,
  useAddListMutation,
  useDeleteCardMutation,
  useDeleteListMutation,
  useEditCardMutation,
  useEditListMutation,
} from "@/queries/cardList";
import {
  AddCardRequest,
  AddListRequest,
  DeleteCardRequest,
  DeleteListRequest,
  EditCardRequest,
  EditListRequest,
} from "@/queries/cardList/interface";

interface Props {
  children: React.ReactNode;
}

interface CardListFuncState {
  onAddList: ({ title }: AddListRequest) => void;
  onEditList: ({ id, title }: EditListRequest) => void;
  onDeleteList: ({ id }: DeleteListRequest) => void;
}

interface CardFuncState {
  onAddCard: ({ text }: AddCardRequest) => void;
  onEditCard: ({ id, text }: EditCardRequest) => void;
  onDeleteCard: ({ id }: DeleteCardRequest) => void;
}

export const CardListContext = createContext<CardListFuncState>({
  onAddList: () => {},
  onEditList: () => {},
  onDeleteList: () => {},
});

export const CardContext = createContext<CardFuncState>({
  onAddCard: () => {},
  onEditCard: () => {},
  onDeleteCard: () => {},
});

export function CardListHandlerProvider({ children }: Props) {
  const { mutate: addListMutate } = useAddListMutation();
  const { mutate: deleteListMutate } = useDeleteListMutation();
  const { mutate: editListMutate } = useEditListMutation();

  const onAddList = ({ title }: AddListRequest) => {
    addListMutate({ title });
  };

  const onEditList = ({ id, title }: EditListRequest) => {
    editListMutate({ id, title });
  };

  const onDeleteList = ({ id }: DeleteListRequest) => {
    deleteListMutate({ id });
  };

  const cardListFunc = { onAddList, onEditList, onDeleteList };

  return <CardListContext.Provider value={cardListFunc}>{children}</CardListContext.Provider>;
}

export function CardHandlerProvider({ children }: Props) {
  const { mutate: addCardMutate } = useAddCardMutation();
  const { mutate: editCardMutate } = useEditCardMutation();
  const { mutate: deleteCardMutate } = useDeleteCardMutation();

  const onAddCard = ({ text, listId }: AddCardRequest) => {
    addCardMutate({ text, listId });
  };

  const onEditCard = ({ text, id }: EditCardRequest) => {
    editCardMutate({ text, id });
  };

  const onDeleteCard = ({ id }: DeleteCardRequest) => {
    deleteCardMutate({ id });
  };

  const cardFunc = { onAddCard, onEditCard, onDeleteCard };

  return (
    <div>
      <CardContext.Provider value={cardFunc}>{children}</CardContext.Provider>
    </div>
  );
}
