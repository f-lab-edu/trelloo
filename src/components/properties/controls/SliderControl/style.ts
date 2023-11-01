import styled from "styled-components";
import { Slider as ShadCnSlider } from "@/components/ui/slider";

export const Container = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const Input = styled.input`
  padding: 5px;
  width: 40px;
  height: 20px;
  background-color: hsl(var(--input));
  border-radius: 5px;
  font-size: x-small;
`;

export const Slider = styled(ShadCnSlider)`
  width: 100px;
  height: 20px;
`;
