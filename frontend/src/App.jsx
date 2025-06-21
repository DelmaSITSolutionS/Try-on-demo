import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import ProductTryOn from "./pages/ProductTryOn";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/product/:id" element={<ProductTryOn />} />
      </Routes>
    </div>
  );
}

export default App;
