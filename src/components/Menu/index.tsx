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
import * as S from "./style";
import Button from "@components/Buttons/Button";

interface Props {
  showDrawer: any;
}

function Menu({ showDrawer }: Props) {
  return (
    <S.Container>
      <S.ButtonsWrapper>
        {buttonList.map((button) => (
          <Button icon={button.icon} buttonColor="gray">
            {button.text}
          </Button>
        ))}
      </S.ButtonsWrapper>
      <S.OtherButtonsWrapper>
        {buttonList2.map((button) => (
          <Button icon={button.icon} buttonColor="gray">
            {button.text}
          </Button>
        ))}
        <Button icon={<EllipsisOutlined />} onClick={showDrawer} buttonColor="gray" />
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
  },
];
