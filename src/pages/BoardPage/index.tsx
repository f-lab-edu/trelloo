import React, { useState } from "react";
import { Layout } from "antd";
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

const { Content } = Layout;

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
    <Layout style={S.Layout}>
      <Header />
      <Layout style={S.ContentLayout}>
        <Sider />
        <Content style={S.Content}>
          <Menu showDrawer={showDrawer} boardName={"boardName"} searchCards={searchCards} />
          <BoardWrapper searchKeyword={searchKeyword} />
          <Drawer isOpen={isOpen} onClose={onClose} />
        </Content>
      </Layout>
    </Layout>
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
