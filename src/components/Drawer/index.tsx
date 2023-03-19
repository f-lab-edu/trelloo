import * as S from "./style";

interface Props {
  isOpened: boolean;
  isOpenedFromLeft: boolean;
  children: React.ReactNode;
}

function Drawer({ isOpened, isOpenedFromLeft, children }: Props) {
  return (
    <S.Container isOpened={isOpened} isOpenedFromLeft={isOpenedFromLeft}>
      {children}
    </S.Container>
  );
}

export default Drawer;
