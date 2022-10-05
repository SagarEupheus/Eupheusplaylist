import "./App.css";
import Sidebar from "./Components/Sidebar.js";
import Audio from "./Pages/Audio.js";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main flex ">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/audio" element={<Audio />}></Route>
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
