import React, { useState } from "react";
import SiderMenu from "@components/menus/SiderMenu";
import * as S from "./style";

function Sider() {
  const [collapsed, setCollapsed] = useState(true);

  const onClickCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <S.Container
      collapsed={collapsed}
      onCollapse={(value) => {
        setCollapsed(value);
      }}
    >
      {collapsed && <S.SpreadButton onClick={onClickCollapse} />}
      {!collapsed && (
        <>
          <S.Header>
            <S.ProfileContainer>
              <S.Profile>
                <S.ProfileImg></S.ProfileImg>
                <S.ProfileText>
                  <p>dthth</p>
                  <p>Free</p>
                </S.ProfileText>
              </S.Profile>
              <S.CollapseButton onClick={onClickCollapse} />
            </S.ProfileContainer>
          </S.Header>
          <SiderMenu />
        </>
      )}
    </S.Container>
  );
}

export default Sider;
