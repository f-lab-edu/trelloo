/* eslint-disable */
import React from "react";
import { AppstoreOutlined, CalendarOutlined, LinkOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import type { MenuProps } from "antd/es/menu";

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
  onClick?: () => void,
): MenuItem => ({
  key,
  icon,
  children,
  label,
  type,
  onClick,
});

const items: MenuItem[] = [
  getItem("Navigation One", "1", <MailOutlined />),
  getItem("Navigation Two", "2", <CalendarOutlined />),
  getItem("Navigation Two", "sub1", <AppstoreOutlined />, [
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
    getItem("Submenu", "sub1-2", null, [getItem("Option 5", "5"), getItem("Option 6", "6")]),
  ]),
  getItem("Navigation Three", "sub2", <SettingOutlined />, [
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
  ]),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    "link",
    <LinkOutlined />,
  ),
];

function FilterMenu() {
  return (
    <Dropdown>
      <Menu style={{ width: 256 }} defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} />
    </Dropdown>
  );
}

export default FilterMenu;
