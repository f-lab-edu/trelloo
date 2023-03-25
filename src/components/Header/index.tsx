import React from "react";
import { Layout } from "antd";

const { Header: H } = Layout;

function Header() {
  return (
    <H style={{ position: "sticky", top: 0, zIndex: 1, width: "100%", backgroundColor: "white" }}>
      <div>header</div>
    </H>
  );
}

export default Header;
