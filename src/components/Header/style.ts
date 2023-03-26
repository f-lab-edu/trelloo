import styled from "styled-components";

export const Header: React.CSSProperties = {
  position: "sticky",
  top: 0,
  padding: "6px 4px",
  zIndex: 1,
  width: "100%",
  height: 44,
  backgroundColor: "white",
};

export const Container = styled.header`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 40px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;
