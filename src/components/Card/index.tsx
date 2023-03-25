import useModal from "@/hooks/useModal";
import CardDetail from "@components/Modals/CardDetail";
import * as S from "./style";

interface Props {
  text: string;
}

const Card = ({ text }: Props) => {
  const { openModal } = useModal();

  const onClickCard = () => {
    openModal<{ title: string }>({
      component: CardDetail,
      props: { title: "cardDetail" },
    });
  };

  return <S.Container onClick={onClickCard}>{text && text}</S.Container>;
};

export default Card;
