import React from "react";
import { StarOutlined, UsergroupAddOutlined, TableOutlined, DownOutlined } from "@ant-design/icons";
import Button from "@components/buttons/Button";

function DropdownMenu1() {
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
  return (
    <>
      {buttonList.map((button, idx) => (
        <Button key={idx} Icon={button.icon} appearance={{ type: "gray", style: { margin: "5px 5px 0 0" } }}>
          {button.text}
        </Button>
      ))}
    </>
  );
}

export default DropdownMenu1;
