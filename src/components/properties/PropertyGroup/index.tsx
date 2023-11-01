import React, { ReactNode } from "react";
import * as S from "./style";
import { Accordion, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Props {
  name: string;
  children: ReactNode;
}

function PropertyGroup({ name, children }: Props) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{name}</AccordionTrigger>
        <S.AccordionContent>{children}</S.AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default PropertyGroup;
