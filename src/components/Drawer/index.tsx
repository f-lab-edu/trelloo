import React from "react";
import type { MenuProps } from "antd";
import {
  TableOutlined,
  SettingOutlined,
  UserOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  UngroupOutlined,
} from "@ant-design/icons";
import * as S from "./style";

interface Props {
  isOpen: boolean;
  onClose: (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
}

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  const menuItem: MenuItem = {
    key,
    icon,
    children,
    label,
    type,
  };
  return menuItem;
}
const items2: MenuProps["items"] = [
  getItem("About this board", "About this board", <AppstoreOutlined />),
  getItem("Change background", "Change background", <UserOutlined />),
  getItem("Custom fields", "Custom fields", <SettingOutlined />),
  getItem("Stickers", "Stickers", <SettingOutlined />),
  getItem("More", "More", <SettingOutlined />),
  getItem(
    "Stickers",
    "grp",
    null,
    [getItem("Table", "13", <TableOutlined />), getItem("Calendar", "14", <CalendarOutlined />)],
    "group",
  ),
  getItem("Your boards", "grp", null, [getItem("my board", "15", <UngroupOutlined />)], "group"),
];

function Drawer({ isOpen, onClose }: Props) {
  return (
    <S.Drawer title="Menu" placement="right" closable={false} onClose={onClose} open={isOpen} getContainer={false}>
      <S.Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} items={items2} />
    </S.Drawer>
  );
}

export default Drawer;
