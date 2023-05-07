import React from "react";
import { Empty } from "antd";
import { theme } from "@/styles/theme";
import Button from "@components/buttons/Button";
import * as S from "./style";

interface Props {
  resetErrorBoundary: () => void;
}

function NoDataFallback({ resetErrorBoundary }: Props) {
  return (
    <S.Container>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      <Button
        appearance={{
          type: "transparent",

          style: {
            backgroundColor: theme.color.buttonBackground,
            color: theme.color.white,
          },
        }}
        type="button"
        onClick={resetErrorBoundary}
      >
        try again
      </Button>
    </S.Container>
  );
}

export default NoDataFallback;
