import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import loadable from "@loadable/component";
import { SEARCH_PARAMS_KEY } from "@/constants";
import Sider from "@components/Sider";
import DrawerProvider from "@components/providers/DrawerProvider";
import Drawer from "@components/Drawer";
import Header from "@components/Header";
import Menu from "@components/Menu";
import BoardSkeleton from "@components/skeletons/BoardSkeleton";
import NoDataFallback from "@components/fallbacks/NoDataFallback";
import SuspenseBoundary from "@components/SuspenseBoundary";
import * as S from "./style";

const Board = loadable(async () => await import("@components/Board"));

interface BoardProps {
  searchKeyword: string;
}

const BoardPage: React.FC = () => {
  const background = useSelector((state: { background: string }) => state.background);
  const [searchParams, setSearchParams] = useSearchParams(window.location.search);
  const searchKeyword = searchParams.get(SEARCH_PARAMS_KEY.SEARCH) ?? "";

  const searchCards = (keyword: string) => {
    searchParams.set(SEARCH_PARAMS_KEY.SEARCH, keyword);
    setSearchParams(searchParams);
  };

  return (
    <S.Container background={background}>
      <Header />
      <S.ContentLayout>
        <Sider />
        <S.Main>
          <DrawerProvider>
            <Menu boardName={"boardName"} searchCards={searchCards} />
            <BoardWrapper searchKeyword={searchKeyword} />
            <Drawer />
          </DrawerProvider>
        </S.Main>
      </S.ContentLayout>
    </S.Container>
  );
};

export default BoardPage;

function BoardWrapper({ searchKeyword }: BoardProps) {
  return (
    <SuspenseBoundary Fallback={BoardSkeleton} ErrorFallback={NoDataFallback}>
      <Board searchKeyword={searchKeyword} />
    </SuspenseBoundary>
  );
}
