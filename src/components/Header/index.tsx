import React from "react";
import { Layout } from "antd";
import { AppstoreOutlined, BellOutlined, QuestionCircleOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import Button from "@components/Button";
import * as S from "./style";

const { Header: AntdHeader } = Layout;

function Header() {
  return (
    <AntdHeader style={S.Header}>
      <S.Container>
        <S.Nav>
          <Button type="transparent" icon={<AppstoreOutlined />} />
          <Button type="transparent" icon={<AppstoreOutlined />}>
            Trello
          </Button>
          <Button type="transparent" icon={<DownOutlined />} isIconBehindText={true}>
            Workspaces
          </Button>
          <Button type="transparent" icon={<DownOutlined />} isIconBehindText={true}>
            Recent
          </Button>
          <Button type="transparent" icon={<DownOutlined />} isIconBehindText={true}>
            Starred
          </Button>
          <Button type="transparent" icon={<DownOutlined />} isIconBehindText={true}>
            Templates
          </Button>
          <Button type="transparent">Create</Button>
        </S.Nav>
        <S.ButtonsWrapper>
          <Button type="transparent" icon={<BellOutlined />} />
          <Button type="transparent" icon={<QuestionCircleOutlined />} />
          <Button type="transparent" icon={<UserOutlined />} />
        </S.ButtonsWrapper>
      </S.Container>
    </AntdHeader>
  );
}

export default Header;
