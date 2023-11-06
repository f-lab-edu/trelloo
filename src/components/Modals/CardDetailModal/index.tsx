import * as S from "./style";

export interface Props {
  title: string;
}

const CardDetailModal = ({ title }: Props) => {
  return <S.Container>{title}</S.Container>;
};

export default CardDetailModal;
