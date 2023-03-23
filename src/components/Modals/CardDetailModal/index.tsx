import useModal from "@/hooks/useModal";
import * as S from "./style";

export interface CardDetailProps {
  title: string;
}

const CardDetail = ({ title }: CardDetailProps) => {
  return <S.Container>{title}</S.Container>;
};

export default CardDetail;
