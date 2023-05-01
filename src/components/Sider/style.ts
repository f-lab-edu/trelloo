import { Menu as AntdMenu, Layout } from "antd";
import { theme } from "@/styles/theme";
import styled from "styled-components";
import { LeftOutlined, RightCircleOutlined } from "@ant-design/icons";
const { Sider: AntdSider } = Layout;
export const Sider = {
  backgroundColor: theme.color.siderBackground,
};

export const Container = styled(AntdSider).attrs(() => ({
  style: {
    backgroundColor: theme.color.siderBackground,
  },
  width: 300,
  collapsedWidth: 17,
}))``;

export const SpreadButton = styled(RightCircleOutlined).attrs(() => ({
  style: {
    fontSize: "24px",
    position: "absolute",
    top: "13px",
    left: "5px",
  },
}))``;

export const Header = styled.div`
  padding: 14px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  padding-bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid lightgray;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const CollapseButton = styled(LeftOutlined)``;

export const ProfileImg = styled.div`
  width: 36px;
  height: 36px;
  background-color: aliceblue;
`;

export const ProfileText = styled.span`
  margin-left: 10px;
`;

export const Menu = styled(AntdMenu).attrs(() => ({
  style: {
    height: "100%",
    backgroundColor: theme.color.siderBackground,
  },
}))``;
