import React from "react";
import {
  StarOutlined,
  UsergroupAddOutlined,
  ThunderboltOutlined,
  HistoryOutlined,
  TableOutlined,
  DownOutlined,
  RocketOutlined,
  FilterOutlined,
  UserAddOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import Button from "@components/Button";
import * as S from "./style";

interface Props {
  showDrawer: React.MouseEventHandler<HTMLDivElement>;
  boardName: string;
}

function Menu({ showDrawer, boardName }: Props) {
  return (
    <S.Container>
      <S.ButtonsWrapper>
        <Button type="transparent">{boardName}</Button>
        {buttonList.map((button, idx) => (
          <S.ButtonWrapper>
            <Button key={idx} icon={button.icon} type="gray">
              {button.text}
            </Button>
          </S.ButtonWrapper>
        ))}
      </S.ButtonsWrapper>
      <S.OtherButtonsWrapper>
        {buttonList2.map((button, idx) => (
          <S.ButtonWrapper>
            <Button key={idx} icon={button.icon} type="gray">
              {button.text}
            </Button>
          </S.ButtonWrapper>
        ))}
        <Button icon={<EllipsisOutlined />} onClick={showDrawer} type="transparent" />
      </S.OtherButtonsWrapper>
    </S.Container>
  );
}

export default Menu;

const buttonList = [
  {
    text: "",
    icon: <StarOutlined />,
  },
  {
    text: "Workspace available",
    icon: <UsergroupAddOutlined />,
  },
  {
    text: "Board",
    icon: <TableOutlined />,
  },
  {
    text: "",
    icon: <DownOutlined />,
  },
];

const buttonList2 = [
  {
    text: "Repeats",
    icon: <HistoryOutlined />,
  },
  {
    text: "Power-ups",
    icon: <RocketOutlined />,
  },
  {
    text: "Automation",
    icon: <ThunderboltOutlined />,
  },
  {
    text: "Filter",
    icon: <FilterOutlined />,
  },
  {
    text: "Share",
    icon: <UserAddOutlined />,
    buttonColor: "blue",
  },
];
