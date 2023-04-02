import { Card as AntdCard } from "antd";
import { EditOutlined } from "@ant-design/icons";
import loadable from "@loadable/component";
import useModal from "@/hooks/useModal";
const CardDetail = loadable(() => import("@components/modals/CardDetail"));
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
      props: { title: data.text },
    });
  };

  return (
    <S.Container>
      <AntdCard style={S.Card} onClick={handleClick} bodyStyle={S.Body}>
        <p>{data.text}</p>
        <EditOutlined className="edit_button" />
      </AntdCard>
    </S.Container>
  );
};

export default Card;
