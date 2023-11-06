import useModal from "@/hooks/useModal";
import CardDetail from "@components/Modals/CardDetailModal";
import * as S from "./style";

interface Props {
  text: string;
}

const Card = ({ text }: Props) => {
  const { openModal } = useModal<{ title: string }>();

  const onClickCard = () => {
    openModal({ component: CardDetail, props: { title: "cardDetail" } });
  };

  return <S.Container onClick={onClickCard}>{text && text}</S.Container>;
};

export default Card;
