import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardPage from "./pages/BoardPage";
import ModalsProvider from "@components/Modals/ModalsProvider";
import Modals from "@components/Modals/Modals";

function App() {
  return (
    <ModalsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoardPage />} />
        </Routes>
        <Modals />
      </BrowserRouter>
    </ModalsProvider>
  );
}

export default App;
