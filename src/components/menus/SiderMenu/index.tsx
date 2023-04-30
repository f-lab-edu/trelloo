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
import useModal from "@/hooks/useModal";
import * as S from "./style";
import InviteToWorkspaceModal from "@components/modals/InviteToWorkspaceModal";

type MenuItem = Required<MenuProps>["items"][number];

function SiderMenu() {
  const { openModal } = useModal();

  const handleMemberClick = () => {
    openModal({
      component: "inviteToWorkspaceModal",
      props: {},
    });
  };

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

  const items2: MenuProps["items"] = [
    getItem("Boards", "12", <AppstoreOutlined />),
    getItem("Members", "13", <UserOutlined />, undefined, undefined, handleMemberClick),
    getItem("Workspace settings", "14", <SettingOutlined />),
    getItem(
      "Workspace views",
      "grp",
      null,
      [getItem("Table", "15", <TableOutlined />), getItem("Calendar", "16", <CalendarOutlined />)],
      "group",
    ),
    getItem("Your boards", "grp2", null, [getItem("my board", "17", <UngroupOutlined />)], "group"),
  ];

  return <S.Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} items={items2} />;
}

export default SiderMenu;
