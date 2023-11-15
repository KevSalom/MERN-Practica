import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import VideoSection from "./Views/VideoSection/VideoSection";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div> 
      <Navbar />
      <div className="container p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideoSection />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
