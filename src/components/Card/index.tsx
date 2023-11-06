import { Button, Card as C } from "antd";
import { PlusOutlined, PicLeftOutlined } from "@ant-design/icons";
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

  return (
    <S.Container>
      <C style={S.Card} onClick={onClickCard} bodyStyle={S.Body}>
        <p>{text}</p>
      </C>
      <S.ButtonWrapper>
        <Button type="ghost" block icon={<PlusOutlined />} style={{ textAlign: "left", padding: 0 }}>
          Add a card
        </Button>
        <Button type="ghost" block icon={<PicLeftOutlined />} style={S.TemplateButton}></Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Card;
