import React from "react";
import { Empty } from "antd";
import { theme } from "@/styles/theme";
import Button from "@components/buttons/Button";
import * as S from "./style";

interface Props {
  onQueryErrorReset: () => void;
}

function BoardErrorFallback({ onQueryErrorReset }: Props) {
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
        onClick={onQueryErrorReset}
      >
        try again
      </Button>
    </S.Container>
  );
}

export default BoardErrorFallback;
