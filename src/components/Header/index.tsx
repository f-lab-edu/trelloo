import React from "react";
import { AppstoreOutlined, BellOutlined, QuestionCircleOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import Button from "@components/buttons/Button";
import * as S from "./style";

function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.Nav>
          <Button Icon={<AppstoreOutlined />} />
          <Button Icon={<AppstoreOutlined />}>Trelloo</Button>
          <Button Icon={<DownOutlined />} isIconBehindText={true}>
            Workspaces
          </Button>
          <Button Icon={<DownOutlined />} isIconBehindText={true}>
            Recent
          </Button>
          <Button Icon={<DownOutlined />} isIconBehindText={true}>
            Starred
          </Button>
          <Button Icon={<DownOutlined />} isIconBehindText={true}>
            Templates
          </Button>
          <Button>Ireate</Button>
        </S.Nav>
        <S.ButtonsWrapper>
          <Button Icon={<BellOutlined />} />
          <Button Icon={<QuestionCircleOutlined />} />
          <Button Icon={<UserOutlined />} />
        </S.ButtonsWrapper>
      </S.Container>
    </S.Header>
  );
}

export default Header;
