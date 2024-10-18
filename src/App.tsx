import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Circles from "./pages/circles";
import { Toaster } from "sonner";
import Circle from "./pages/circle";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto mt-20 min-h-[calc(100vh-80px)] p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/circles" element={<Circles />} />
          <Route path="/circles/:circleId" element={<Circle />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
