import styled from "styled-components";
import { Label as ShadCnLabel } from "@components/ui/label";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled(ShadCnLabel)`
  font-weight: 400;
`;
