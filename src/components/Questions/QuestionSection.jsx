import React from "react";
import { QuestionArray } from "../../arrays/questionsArray";
import QsectionTitle from "./QsectionTitle";
import QsectionFooter from "./QsectionFooter";
import QsectionAccordion from "./QsectionAccordion";

const QuestionSection = () => {
  return (
    <div className="flex flex-col bg-bodycolor w-3/4 mx-auto items-center gap-2  pt-[80px] pb-20  font-Montserrat">
      <QsectionTitle />
      <QsectionAccordion QuestionArray={QuestionArray} />
      <QsectionFooter />
    </div>
  );
};

export default QuestionSection;
