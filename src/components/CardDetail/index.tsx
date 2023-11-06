import useModal from "@utils/hooks/useModal";
import * as S from "./style";

const CardDetail = () => {
  const { closeModal } = useModal();

  return (
    <S.Container>
      CardDetail
      <S.CloseButton onClick={closeModal}>X</S.CloseButton>
    </S.Container>
  );
};

export default CardDetail;
