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
import Button from "@components/Button";
import * as S from "./style";

interface Props {
  onDeleteCard: () => void;
}

function CardEditorButtons({ onDeleteCard }: Props) {
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
      onClick() {
        onDeleteCard();
      },
    },
  ];

  return (
    <div>
      {buttonList.map((button, idx) => (
        <S.ButtonWrapper key={idx}>
          <Button appearance={{ type: "darkGray" }} Icon={button.icon} onClick={button.onClick}>
            {button.text}
          </Button>
        </S.ButtonWrapper>
      ))}
    </div>
  );
}

export default CardEditorButtons;
