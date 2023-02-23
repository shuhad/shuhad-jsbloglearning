import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
