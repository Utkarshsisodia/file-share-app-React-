import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UploadPage from "./pages/UploadPage";
import DownloadPage from "./pages/DownloadPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/UploadPage" element={<UploadPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
