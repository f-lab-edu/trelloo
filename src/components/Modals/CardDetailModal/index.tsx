import { Space, Input } from "antd";
import CardDetailModalButtons from "@components/CardDetailModalButtons";
import Button from "@components/buttons/Button";
import * as S from "./style";

export interface Props {
  title: string;
  onClose: () => void;
}

const CardDetailModal = ({ title, onClose }: Props) => {
  return (
    <S.Container>
      <S.CloseButton onClick={onClose} />
      <Space size="large" direction="vertical">
        <S.Section>
          <S.Title>{title}</S.Title>
          <Button appearance={{ type: "gray" }}>Watch</Button>
        </S.Section>

        <S.MainWrapper>
          <S.Main>
            <Space size="large" direction="vertical">
              <S.Section>
                <S.Title>Description</S.Title>
                <S.DescriptionInput></S.DescriptionInput>
              </S.Section>

              <S.Section>
                <S.Title>Activity</S.Title>
                <Input></Input>
              </S.Section>
            </Space>
          </S.Main>

          <S.Sider>
            <CardDetailModalButtons />
          </S.Sider>
        </S.MainWrapper>
      </Space>
    </S.Container>
  );
};

export default CardDetailModal;
