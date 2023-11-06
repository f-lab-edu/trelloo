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
    { text: "Filter", icon: <FilterOutlined />, Dropdown: <FilterMenu onClick={searchCards} />, onClick: searchCards },
    {
      text: "Share",
      icon: <UserAddOutlined />,
      buttonColor: "blue",
    },
  ];

  return (
    <>
      {buttonList2.map(({ text, icon, Dropdown }, idx) => (
        <DropdownButton key={idx} text={text} icon={icon} Dropdown={Dropdown} />
      ))}
    </>
  );
}

export default DropdownMenu2;
