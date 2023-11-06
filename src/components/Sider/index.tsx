import React, { useState } from "react";
import { Layout } from "antd";
import type { MenuProps } from "antd";
import { LeftOutlined, RightCircleOutlined } from "@ant-design/icons";
import SiderMenu from "@components/menus/SiderMenu";
import * as S from "./style";

const { Sider: AntdSider } = Layout;

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
          <SiderMenu />
        </>
      )}
    </AntdSider>
  );
}

export default Sider;
