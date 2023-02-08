import React from "react";
import QuestionSection from "../components/Questions/QuestionSection";
import VideoBg from "../components/VideoBg";
import Worldbg from "../components/Worldbg";

function HomePage() {
  return (
    <div>
      {/* <VideoBg /> */}
      <Worldbg />
      <QuestionSection />
    </div>
  );
}

export default HomePage;
