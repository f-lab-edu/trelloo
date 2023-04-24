import React from "react";
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

function CardDetailModalButtons() {
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
  return (
    <S.Container>
      {buttonList.map((button, idx) => (
        <S.ButtonWrapper key={idx}>
          <Button appearance={{ type: "gray" }} Icon={button.icon}>
            {button.text}
          </Button>
        </S.ButtonWrapper>
      ))}
    </S.Container>
  );
}

export default CardDetailModalButtons;
