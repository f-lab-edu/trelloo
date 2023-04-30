import React, { useState, type ReactNode } from "react";
import Button from "@components/buttons/Button";
import * as S from "./style";

interface Props {
  text: string;
  Icon: ReactNode;
  Dropdown?: ReactNode;
}

function DropdownButton({ text, Icon, Dropdown }: Props) {
  const [isOpened, setIsOpened] = useState(false);

  const handleDropdownOpen = () => {
    setIsOpened(!isOpened);
  };

  return (
    <S.Container>
      <Button onClick={handleDropdownOpen} Icon={Icon} appearance={{ type: "gray", style: { margin: "5px 5px 0 0" } }}>
        {text}
      </Button>
      {isOpened && (
        <S.Dropdown>
          {Dropdown}
        </S.Dropdown>
      )}
    </S.Container>
  );
}

export default DropdownButton;
