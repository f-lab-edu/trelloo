import { MODAL_TYPE } from "@/constants";
import useModal from "@/hooks/useModal";
import * as S from "./style";

interface Props {
  text: string;
}

const Card = ({ text }: Props) => {
  const { openModal } = useModal();

  const onClickCard = () => {
    openModal({ type: MODAL_TYPE.CARD_DETAIL, props: { title: "cardDetail" } });
  };

  return <S.Container>{text && text}</S.Container>;
};

export default Card;
