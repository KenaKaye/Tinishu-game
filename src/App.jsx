import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";

function App() {
  return (
    <Router location="/Tinishu/root/app">
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
