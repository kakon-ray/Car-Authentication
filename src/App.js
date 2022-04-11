import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home/Home/Home";
import About from "../src/Pages/About/About";
import Services from "./Pages/Home/Services/Services";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
      </Routes>
    </div>
  );
}

export default App;
