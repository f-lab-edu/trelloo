import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";

export const Container = styled.div`
  padding: 5px 24px;
  display: flex;
  width: 100%;
`;

export const CardListSkeleton = styled(Skeleton).attrs(() => ({
  sx: {
    marginRight: "10px",
  },
}))``;
