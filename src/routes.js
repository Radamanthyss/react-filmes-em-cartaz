import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Filme from "./pages/filme";
import Header from "./components/header/index";
import Erro from "./pages/erro";
import Favoritos from "./pages/favoritos";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/filme/:id" element={<Filme />}></Route>
        <Route path="/favoritos" element={<Favoritos />}></Route>

        <Route path="*" element={<Erro/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
