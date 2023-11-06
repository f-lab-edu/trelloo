import styled from "styled-components";
import { AccordionContent as ShadAccordionContent } from "@/components/ui/accordion";

export const AccordionContent = styled(ShadAccordionContent)`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
