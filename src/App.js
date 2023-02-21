import "./App.css";
import "./components/Navbar/Navbar";
import Navbar from "./components/Navbar/Navbar.js";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Birthday } from "./components/Birthday/Birthday";
import DetailView from "./pages/DetailView/DetailView";
import WorkInProgress from "./components/WIP/WorkInProgress";
import BtnToggle from "./components/BtnToggle/BtnToggle";
import ThemeContextProvider from "./Context/ThemeContext";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/" element={<DetailView />} />
          {/*<Route path="/Birthday" element={<Birthday/>}/>*/}
          <Route path="/Birthday" element={<WorkInProgress />} />
          <Route path="/random" element={<WorkInProgress />} />
          <Route path="/contact" element={<AboutUs />} />
        </Routes>
        <BtnToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
