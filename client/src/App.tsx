import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import VideoSection from "./Views/VideoSection/VideoSection";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer} from 'react-toastify';
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import EditVideo from "./Views/EditVideo/EditVideo";

function App() {
  return (
    <div> 
      <ToastContainer theme="dark" />
      <Navbar />
      <div className="container p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideoSection />} />
        <Route path="/edit/:id" element={<EditVideo />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
