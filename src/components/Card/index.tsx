import { Card as AntdCard } from "antd";
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
      <AntdCard style={S.Card} onClick={handleClick} bodyStyle={S.Body}>
        <p>{data.text}</p>
      </AntdCard>
    </S.Container>
  );
};

export default Card;
