import { Card as C } from "antd";
import loadable from "@loadable/component";
import useModal from "@/hooks/useModal";
const CardDetail = loadable(() => import("@components/Modals/CardDetail"));
import * as S from "./style";

interface Props {
  data: {
    text: string;
  };
}

const Card = ({ data }: Props) => {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal({
      component: CardDetail,
      props: { title: "cardDetail" },
      options: { hasOverlay: true },
    });
  };

  return (
    <S.Container>
      <C style={S.Card} onClick={handleClick} bodyStyle={S.Body}>
        <p>{data.text}</p>
      </C>
    </S.Container>
  );
};

export default Card;
