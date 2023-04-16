import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";

export const Container = styled.div`
  padding: 5px 24px;
  display: flex;
  min-width: 1400px;
`;

export const CardListSkeleton = styled(Skeleton).attrs(() => ({
  sx: {
    marginRight: "10px",
  },
}))``;
