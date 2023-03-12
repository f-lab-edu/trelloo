import { MODAL_TYPE } from "@utils/constants";
import useModal from "@utils/hooks/useModal";
import * as S from "./style";

const Card = () => {
  const { openModal } = useModal();
  const onClickCard = () => {
    openModal(MODAL_TYPE.CARD_DETAIL);
  };

  return <S.Container onClick={onClickCard}>Card</S.Container>;
};

export default Card;
