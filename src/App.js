import "./App.css";
// import Header from "./components/Header";
import VideoBg from "./components/VideoBg";
import { Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";
import Layout from "./components/Layout";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<VideoBg />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
