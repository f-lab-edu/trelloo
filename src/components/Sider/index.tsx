import React, { useState } from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import {
  LeftOutlined,
  RightCircleOutlined,
  TableOutlined,
  SettingOutlined,
  UserOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  UngroupOutlined,
} from "@ant-design/icons";
import * as S from "./style";
const { Sider: Si } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items2: MenuProps["items"] = [
  getItem("Boards", "12", <AppstoreOutlined />),
  getItem("Members", "12", <UserOutlined />),
  getItem("Workspace settings", "12", <SettingOutlined />),
  getItem(
    "Workspace views",
    "grp",
    null,
    [getItem("Table", "13", <TableOutlined />), getItem("Calendar", "14", <CalendarOutlined />)],
    "group",
  ),
  getItem("Your boards", "grp", null, [getItem("my board", "15", <UngroupOutlined />)], "group"),
];

function Sider() {
  const [collapsed, setCollapsed] = useState(false);

  const onClickCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Si
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={S.Sider}
      collapsedWidth={17}
      width={280}
    >
      {collapsed && (
        <RightCircleOutlined
          onClick={onClickCollapse}
          style={{ fontSize: "24px", position: "absolute", top: "13px", left: "5px" }}
        />
      )}
      {!collapsed && (
        <>
          <S.SiderButton>
            <S.ProfileContainer>
              <S.Profile>
                <S.ProfileImg></S.ProfileImg>
                <S.ProfileText>
                  <p>dthth</p>
                  <p>Free</p>
                </S.ProfileText>
              </S.Profile>
              <LeftOutlined onClick={onClickCollapse} />
            </S.ProfileContainer>
          </S.SiderButton>
          <Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={S.Menu} items={items2} />
        </>
      )}
    </Si>
  );
}

export default Sider;
