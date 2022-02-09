import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { App } from "./App";
import Detalhes from "./pages/Detalhes";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="detalhes" element={<Detalhes />} />
    </Routes>
  </BrowserRouter>,
  rootElement
)