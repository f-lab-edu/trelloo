import { Card as C } from "antd";
import { DashOutlined } from "@ant-design/icons";
import Card from "@components/Card";
import * as S from "./style";

const CardList = () => {
  return (
    <S.Container>
      <C
        title="Card list"
        bordered={false}
        style={{ width: 300 }}
        extra={<DashOutlined />}
        headStyle={S.Header}
        bodyStyle={S.Body}
      >
        <Card text="card" />
      </C>
    </S.Container>
  );
};

export default CardList;
