import React from "react";
import { LinkOutlined } from "@ant-design/icons";
import * as S from "./style";

interface Props {
  onClose: () => void;
}

function InviteToWorkspaceModal({ onClose }: Props) {
  return (
    <S.Container>
      <S.CloseButton onClick={onClose} />
      <S.ContentWrapper>
        <S.Title>Invite to workspace</S.Title>
        <S.Input placeholder="Email address or name" />
      </S.ContentWrapper>
      <S.LinkWrapper>
        <S.LinkIconContainer>
          <LinkOutlined />
        </S.LinkIconContainer>
        <S.LinkTextWrapper>
          <S.LinkText>Invite someone to this workspace with a link</S.LinkText>
          <S.LinkButton>Create link</S.LinkButton>
        </S.LinkTextWrapper>
      </S.LinkWrapper>
    </S.Container>
  );
}

export default InviteToWorkspaceModal;
