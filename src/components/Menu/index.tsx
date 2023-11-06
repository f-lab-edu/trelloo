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
import Button from "@components/buttons/Button";
import DropdownButton from "@components/buttons/DropdownButton";
import FilterMenu from "@components/menus/FilterMenu";
import * as S from "./style";

interface Props {
  showDrawer: React.MouseEventHandler<HTMLButtonElement>;
  boardName: string;
}

function Menu({ showDrawer, boardName }: Props) {
  return (
    <S.Container>
      <S.ButtonsWrapper>
        <Button appearance={{ type: "transparent" }}>{boardName}</Button>
        {buttonList.map((button, idx) => (
          <Button key={idx} Icon={button.icon} appearance={{ type: "gray", style: { margin: "5px 5px 0 0" } }}>
            {button.text}
          </Button>
        ))}
      </S.ButtonsWrapper>
      <S.OtherButtonsWrapper>
        {buttonList2.map(({ text, icon, Dropdown }, idx) => (
          <DropdownButton key={idx} text={text} icon={icon} Dropdown={Dropdown} />
        ))}
        <Button Icon={<EllipsisOutlined />} onClick={showDrawer} appearance={{ type: "transparent" }} />
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
  { text: "Filter", icon: <FilterOutlined />, Dropdown: FilterMenu },
  {
    text: "Share",
    icon: <UserAddOutlined />,
    buttonColor: "blue",
  },
];
