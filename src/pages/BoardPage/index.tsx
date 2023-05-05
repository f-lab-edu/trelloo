import React, { useState } from "react";
import loadable from "@loadable/component";
import Sider from "@components/Sider";
import Drawer from "@components/Drawer";
import Header from "@components/Header";
import Menu from "@components/Menu";
import BoardSkeleton from "@components/skeletons/BoardSkeleton";
import BoardErrorFallback from "@components/BoardErrorFallback";
import SuspenseBoundary from "@components/SuspenseBoundary";
import * as S from "./style";

const Board = loadable(async () => await import("@components/Board"));

interface BoardProps {
  searchKeyword: string;
}

const BoardPage: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [searchKeyword, setSearchKeywords] = useState<string>("");

  const searchCards = (keyword: string) => {
    setSearchKeywords(keyword);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <S.Container>
      <Header />
      <S.ContentLayout>
        <Sider />
        <S.Main>
          <Menu showDrawer={showDrawer} boardName={"boardName"} searchCards={searchCards} />
          <BoardWrapper searchKeyword={searchKeyword} />
          <Drawer isOpen={isOpen} onClose={onClose} />
        </S.Main>
      </S.ContentLayout>
    </S.Container>
  );
};

export default BoardPage;

function BoardWrapper({ searchKeyword }: BoardProps) {
  return (
    <SuspenseBoundary Fallback={BoardSkeleton} ErrorFallback={BoardErrorFallback}>
      <Board searchKeyword={searchKeyword} />
    </SuspenseBoundary>
  );
}
