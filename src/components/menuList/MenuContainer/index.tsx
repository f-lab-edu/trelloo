import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function MenuContainer({ children }: Props) {
  return <div>{children}</div>;
}

export default MenuContainer;
