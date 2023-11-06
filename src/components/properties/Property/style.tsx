import styled from "styled-components";
import { Label as ShadCnLabel } from "@components/ui/label";

export const Container = styled.div<{ isVertical?: boolean }>`
  display: flex;
  flex-direction: ${({ isVertical }) => (isVertical ? "column" : "row")};
  justify-content: space-between;
  align-items: ${({ isVertical }) => (isVertical ? "flex-start" : "center")};
  row-gap: ${({ isVertical }) => (isVertical ? "10px" : 0)};
`;

export const Label = styled(ShadCnLabel)`
  font-weight: 400;
`;
