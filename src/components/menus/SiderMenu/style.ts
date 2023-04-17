import { Menu as AntdMenu } from "antd";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Menu = styled(AntdMenu).attrs(() => ({
  style: {
    height: "100%",
    backgroundColor: theme.color.siderBackground,
  },
}))``;
