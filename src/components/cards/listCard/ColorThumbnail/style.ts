import styled from "styled-components";

export const Thumbnail = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
`;
