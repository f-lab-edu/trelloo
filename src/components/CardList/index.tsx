import { Button, Card as C } from "antd";
import { EllipsisOutlined, PlusOutlined, PicLeftOutlined } from "@ant-design/icons";
import Card from "@components/Card";
import * as S from "./style";

const CardList = () => {
  return (
    <S.Container>
      <C
        title="Card list"
        bordered={false}
        style={{ width: 300 }}
        extra={<EllipsisOutlined />}
        headStyle={S.Header}
        bodyStyle={S.Body}
      >
        <Card text="card" />
        <S.ButtonWrapper>
          <Button type="ghost" block icon={<PlusOutlined />} style={{ textAlign: "left", padding: 0 }}>
            Add a card
          </Button>
          <Button type="ghost" block icon={<PicLeftOutlined />} style={S.TemplateButton}></Button>
        </S.ButtonWrapper>
      </C>
    </S.Container>
  );
};

export default CardList;
