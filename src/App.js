import "./App.css";
// import Header from "./components/Header";
import VideoBg from "./components/VideoBg";
import { Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";
import Layout from "./components/Layout";
import Roadmap from "./components/Roadmap";
import Worldbg from "./components/Worldbg";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<VideoBg />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/worldbg" element={<Worldbg />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
