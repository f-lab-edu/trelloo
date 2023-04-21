import React, { useState, Suspense } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Layout } from "antd";
import Sider from "@components/Sider";
import Drawer from "@components/Drawer";
import Header from "@components/Header";
import Menu from "@components/Menu";
import Board from "@components/Board";
import BoardSkeleton from "@components/skeletons/BoardSkeleton";
import EmptyBoard from "@components/EmptyBoard";

import * as S from "./style";

const { Content } = Layout;

const BoardPage: React.FC = () => {
  const [open, setOpen] = useState(false);

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
          <Menu showDrawer={showDrawer} boardName={"boardName"} />
          <BoardWrapper />
          <Drawer open={open} onClose={onClose} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BoardPage;

function BoardWrapper() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => <EmptyBoard onQueryErrorReset={resetErrorBoundary} />}
        >
          <Suspense fallback={<BoardSkeleton />}>
            <Board />
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
