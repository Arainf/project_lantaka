import { Routes, Route } from "react-router-dom";
import Login from './page/login';
import Home from "./page/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>

  );
}

export default App;
