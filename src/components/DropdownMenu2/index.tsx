import React from "react";
import {
  ThunderboltOutlined,
  HistoryOutlined,
  RocketOutlined,
  FilterOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import DropdownButton from "@components/buttons/DropdownButton";
import FilterMenu from "@components/menus/FilterMenu";

interface Props {
  searchCards: (keyword: string) => void;
}

function DropdownMenu2({ searchCards }: Props) {
  const buttonList2 = [
    {
      text: "Repeats",
      Icon: <HistoryOutlined />,
    },
    {
      text: "Power-ups",
      Icon: <RocketOutlined />,
    },
    {
      text: "Automation",
      Icon: <ThunderboltOutlined />,
    },
    { text: "Filter", Icon: <FilterOutlined />, Dropdown: <FilterMenu onClick={searchCards} />, onClick: searchCards },
    {
      text: "Share",
      Icon: <UserAddOutlined />,
      buttonColor: "blue",
    },
  ];

  return (
    <>
      {buttonList2.map(({ text, Icon, Dropdown }, idx) => (
        <DropdownButton key={idx} text={text} Icon={Icon} Dropdown={Dropdown} />
      ))}
    </>
  );
}

export default DropdownMenu2;
