import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aspirantes from "./pages/Aspirantes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aspirantes" element={<Aspirantes />} />
      </Routes>
    </BrowserRouter>
  );
}
