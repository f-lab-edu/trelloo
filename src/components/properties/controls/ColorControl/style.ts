import { Button as ShadCnButton } from "@/components/ui/button";
import styled from "styled-components";

export const Button = styled(ShadCnButton)`
  width: 100px;
  height: 25px;
  background-color: ${({ color }) => color};
`;
