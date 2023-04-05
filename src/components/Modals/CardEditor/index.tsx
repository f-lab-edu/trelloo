import React, { useState } from "react";
import { Input } from "antd";
import {
  CreditCardOutlined,
  TagOutlined,
  UserSwitchOutlined,
  IdcardOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { DeleteCardRequest, EditCardRequest } from "@/queries/cardList/interface";
import Button from "@components/Button";
import * as S from "./style";

const { TextArea } = Input;

export interface Props {
  data: {
    id: string;
    text: string;
  };
  onClick: (e: any) => void;
  setIsCardEditorOpened: (state: boolean) => void;
  onEditCard: (params: EditCardRequest) => void;
  onDeleteCard: (params: DeleteCardRequest) => void;
}

const CardEditor = ({ data, onClick, setIsCardEditorOpened, onEditCard, onDeleteCard }: Props) => {
  const [inputValue, setInputValue] = useState(data.text);

  const buttonList = [
    {
      text: "Open card",
      icon: <CreditCardOutlined />,
    },
    {
      text: "Edit labels",
      icon: <TagOutlined />,
    },
    {
      text: "Change members",
      icon: <UserSwitchOutlined />,
    },
    {
      text: "Change cover",
      icon: <IdcardOutlined />,
    },
    {
      text: "Move",
      icon: <ArrowRightOutlined />,
    },
    {
      text: "Copy",
      icon: <CreditCardOutlined />,
    },
    {
      text: "Edit dates",
      icon: <CalendarOutlined />,
    },
    {
      text: "Archive",
      icon: <SaveOutlined />,
      onClick(id: string) {
        onDeleteCard({ id });
      },
    },
  ];

  const handleClickSave = (params: { id: string; text: string }) => {
    setIsCardEditorOpened(false);
    onEditCard(params);
  };

  return (
    <>
      <S.Overlay onClick={onClick} />
      <S.Container>
        <S.InputWrapper>
          <TextArea
            defaultValue={data.text}
            onChange={(e) => setInputValue(e.target.value)}
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
          <S.SaveButtonWrapper>
            <Button type="blue" onClick={() => handleClickSave({ id: data.id, text: inputValue })}>
              Save
            </Button>
          </S.SaveButtonWrapper>
        </S.InputWrapper>
        <S.MenuButtonsWrapper>
          {buttonList.map((button) => (
            <S.ButtonWrapper>
              <Button type="darkGray" icon={button.icon} onClick={() => button.onClick?.(data.id)}>
                {button.text}
              </Button>
            </S.ButtonWrapper>
          ))}
        </S.MenuButtonsWrapper>
      </S.Container>
    </>
  );
};

export default CardEditor;
