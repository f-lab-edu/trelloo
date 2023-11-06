import React from "react";
import * as S from "./style";

interface Props {
  onClose: () => void;
}

function SettingDrawer({ onClose }: Props) {
  return (
    <S.Container>
      SettingDrawer
      <button onClick={onClose}>x</button>
    </S.Container>
  );
}

export default SettingDrawer;
