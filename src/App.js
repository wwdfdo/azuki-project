import "./App.css";
// import Header from "./components/Header";
import VideoBg from "./components/VideoBg";
import { Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<VideoBg />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
