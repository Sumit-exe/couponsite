import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./pages/Category";
import Home from "./pages/home";
import Store from "./pages/store";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/storepage" element={<Store />} />
          <Route path="/categorypage" element={<Category />} />
          <Route path="/contactpage" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
