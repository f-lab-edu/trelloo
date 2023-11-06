import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardPage from "./pages/BoardPage";
import Modal from "@components/Modals/ModalContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardPage />} />
      </Routes>
      <Modal />
    </BrowserRouter>
  );
}

export default App;
