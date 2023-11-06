import React from "react";
import { Layout } from "antd";
import { AppstoreOutlined, BellOutlined, QuestionCircleOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import Button from "@components/Buttons/Button";
import * as S from "./style";

const { Header: H } = Layout;

function Header() {
  return (
    <H style={S.Header}>
      <S.Container>
        <S.Nav>
          <Button icon={<AppstoreOutlined />} />
          <Button icon={<AppstoreOutlined />}>Trello</Button>
          <Button icon={<DownOutlined />} isIconBehindText={true}>
            Workspaces
          </Button>
          <Button icon={<DownOutlined />} isIconBehindText={true}>
            Recent
          </Button>
          <Button icon={<DownOutlined />} isIconBehindText={true}>
            Starred
          </Button>
          <Button icon={<DownOutlined />} isIconBehindText={true}>
            Templates
          </Button>
          <Button>Create</Button>
        </S.Nav>
        <S.ButtonsWrapper>
          <Button icon={<BellOutlined />} />
          <Button icon={<QuestionCircleOutlined />} />
          <Button icon={<UserOutlined />} />
        </S.ButtonsWrapper>
      </S.Container>
    </H>
  );
}

export default Header;
