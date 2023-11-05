import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

const MainPage = loadable(() => import("./pages/MainPage"));
const BoardPage = loadable(() => import("./pages/BoardPage"));
const LoginPage = loadable(() => import("./pages/LoginPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
