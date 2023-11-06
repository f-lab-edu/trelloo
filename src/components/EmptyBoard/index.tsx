import { Empty } from "antd";
import * as S from "./style";

function EmptyBoard() {
  return (
    <S.Container>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </S.Container>
  );
}

export default EmptyBoard;
