import { Button } from "@components/ui/button";
import styled from "styled-components";
import { Slider as ShadCnSlider } from "@/components/ui/slider";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px; ;
`;
export const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;
export const Input = styled.input`
  padding: 0 5px;
  width: 65px;
  background-color: hsl(var(--input));
  border-radius: 5px;
  font-size: x-small;
`;
export const Color = styled(Button)`
  width: 80px;
  height: 25px;
  background-color: ${({ color }) => color};
`;
export const Slider = styled(ShadCnSlider)``;
