import React from "react";
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
import Button from "@components/buttons/Button";
import * as S from "./style";

const { TextArea } = Input;

export interface Props {
  text: string;
  onClick: (e: any) => void;
}

const CardEditor = ({ text, onClick }: Props) => {
  return (
    <>
      <S.Overlay onClick={onClick} />
      <S.Container>
        <S.InputWrapper>
          <TextArea defaultValue={text} placeholder="Controlled autosize" autoSize={{ minRows: 3, maxRows: 5 }} />
          <S.SaveButtonWrapper>
            <Button type="blue">Save</Button>
          </S.SaveButtonWrapper>
        </S.InputWrapper>
        <S.MenuButtonsWrapper>
          {buttonList.map((button) => (
            <S.ButtonWrapper>
              <Button type="darkGray" icon={button.icon}>
                {button.text}
              </Button>
            </S.ButtonWrapper>
          ))}
        </S.MenuButtonsWrapper>
      </S.Container>
    </>
  );
};

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
  },
];

export default CardEditor;
