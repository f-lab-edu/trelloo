import React, { useState } from "react";
import { Layout } from "antd";
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
const { Sider: AntdSider } = Layout;

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
  getItem("Members", "13", <UserOutlined />),
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

function Sider() {
  const [collapsed, setCollapsed] = useState(true);

  const onClickCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <AntdSider
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
          <S.Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} items={items2} />
        </>
      )}
    </AntdSider>
  );
}

export default Sider;
