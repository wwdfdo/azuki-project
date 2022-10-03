import React from "react";
import { useState } from "react";
import { QuestionArray } from "../arrays/questionsArray";

const QsectionAccordion = () => {
  const [visibleAccordionId, setVisibleAccordionId] = useState(null);
  return (
    <>
      {QuestionArray.map((Question) => (
        <div key={Question.id} className="mb-5 border-b-2 border-gray-400 pb-4">
          <div
            className="flex justify-between"
            onClick={() =>
              setVisibleAccordionId(
                visibleAccordionId === Question.id ? null : Question.id
              )
            }
          >
            <h3 className=" font-bold">{Question.qtitle}</h3>
            <span className="text-xl">
              <i
                className={`fa-solid ${
                  visibleAccordionId === Question.id ? "fa-minus" : "fa-plus"
                } `}
              ></i>
            </span>
          </div>
          <div
            className={`${
              visibleAccordionId === Question.id ? "" : "hidden"
            } mt-4`}
          >
            <ul>
              {Question.answer.map((a) => (
                <li>
                  <input type="checkbox" id={a} name={a} value={a} />
                  <label for="vehicle1"> {a}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default QsectionAccordion;
