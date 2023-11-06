import useModal from "@utils/hooks/useModal";
import * as S from "./style";

const CardDetail = ({ title }: { title: string }) => {
  const { closeModal } = useModal();

  return (
    <S.Container>
      {title}
      <S.CloseButton onClick={closeModal}>X</S.CloseButton>
    </S.Container>
  );
};

export default CardDetail;
