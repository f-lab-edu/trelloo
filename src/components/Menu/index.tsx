import React from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import useDrawer from "@/hooks/useDrawer";
import Button from "@components/buttons/Button";
import DropdownMenu1 from "@components/DropdownMenu1";
import DropdownMenu2 from "@components/DropdownMenu2";
import * as S from "./style";

interface Props {
  boardName: string;
  searchCards: (keyword: string) => void;
}

function Menu({ boardName, searchCards }: Props) {
  const { openDrawer } = useDrawer();

  return (
    <S.Container>
      <S.ButtonsWrapper>
        <DropdownMenu1 />
        <Button appearance={{ type: "transparent" }}>{boardName}</Button>
      </S.ButtonsWrapper>
      <S.OtherButtonsWrapper>
        <DropdownMenu2 searchCards={searchCards} />
        <Button Icon={<EllipsisOutlined />} onClick={openDrawer} appearance={{ type: "transparent" }} />
      </S.OtherButtonsWrapper>
    </S.Container>
  );
}

export default Menu;
