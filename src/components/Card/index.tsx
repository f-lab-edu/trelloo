import loadable from "@loadable/component";
import useModal from "@/hooks/useModal";
const CardDetail = loadable(() => import("@components/Modals/CardDetail"));
import * as S from "./style";

interface Props {
  text: string;
}

const Card = ({ text }: Props) => {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal({
      component: CardDetail,
      props: { title: "cardDetail" },
      options: { hasOverlay: true },
    });
  };

  return <S.Container onClick={handleClick}>{text && text}</S.Container>;
};

export default Card;
