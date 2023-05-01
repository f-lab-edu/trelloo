import React,{type ReactNode} from "react";
import { PlusOutlined } from "@ant-design/icons";
import Button from "@components/buttons/Button";
import * as S from "./style";

interface Props {
  isOpen: boolean;
  btnText: string;
  submitBtnText: string;
  children: ReactNode
  toggleInputOpen:()=>void;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

function Composer({ isOpen,toggleInputOpen, btnText, submitBtnText, children, onSubmit }: Props) {

  return    (
  <S.Container onSubmit={onSubmit}>
    {!isOpen ? (
      <S.ButtonWrapper onClick={toggleInputOpen}>
        <Button appearance={{ type: "transparent" }} Icon={<PlusOutlined />}>
          {btnText}
        </Button>
      </S.ButtonWrapper>
    ) : (
      <div>
        {children}
        <S.SubmitButtonWrapper>
          <Button type="submit" appearance={{ type: "blue" }} >
            {submitBtnText}
          </Button>
          <S.CloseButton onClick={toggleInputOpen} />
        </S.SubmitButtonWrapper>
      </div>
    )}
  </S.Container>)
}

export default Composer;
