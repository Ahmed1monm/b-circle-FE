import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Circles from "./pages/circles";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto mt-16 h-screen p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/circles" element={<Circles />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
