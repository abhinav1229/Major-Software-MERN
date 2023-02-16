import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Otp from "./routes/Otp";
import ProductKey from "./routes/ProductKey";
import Email from "./routes/Email";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/"} element={<Login />} />
        <Route path={"/otp"} element={<Otp />} />
        <Route path={"/productkey"} element={<ProductKey />} />
        <Route path={"/email"} element={<Email />} />
      </Routes>
    </Router>
  );
}

export default App;
