import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AdminDashBoard from "./pages/AdminDashBoard";

function App() {
  return (
    <div className="font-uncut-sans font-normal">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminDashBoard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
