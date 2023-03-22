import useModal from "@/hooks/useModal";
import * as S from "./style";

interface Props {
  title: string;
}

const CardDetail = ({ title }: Props) => {
  return <S.Container>{title}</S.Container>;
};

export default CardDetail;
