import useModal from "@/hooks/useModal";
import * as S from "./style";

interface Props {
  title: string;
}

const CardDetail = ({ title }: Props) => {
  console.log(title);
  const { closeModal } = useModal();

  return (
    <S.Container>
      {title}
      <S.CloseButton onClick={closeModal}>X</S.CloseButton>
    </S.Container>
  );
};

export default CardDetail;
