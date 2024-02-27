import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Following from "./pages/Following";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Nav />
      <div className="max-sm:mx-5 sm:mx-6 md:mx-14 lg:mx-[5.5rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/following" element={<Following />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
