import { MODAL_TYPE } from "@/constants";
import useModal from "@/hooks/useModal";
import * as S from "./style";

const Card = () => {
  const { openModal } = useModal();

  const onClickCard = () => {
    openModal({ type: MODAL_TYPE.CARD_DETAIL, props: { title: "cardDetail" } });
  };

  return <S.Container onClick={onClickCard}>Card</S.Container>;
};

export default Card;
