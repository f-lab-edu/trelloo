import styled from "styled-components";
import { AccordionContent as ShadAccordionContent } from "@/components/ui/accordion";

export const AccordionContent = styled(ShadAccordionContent)<{ horizontal?: boolean }>`
  padding: 0 10px;
  width: 100%;
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};

  & > div {
    display: flex;
    flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
    gap: 20px;
  }
`;
