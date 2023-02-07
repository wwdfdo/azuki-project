import React from "react";

const QsectionTitle = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h2 className=" md:text-[2.5em] text-[2.1em] font-bold text-center">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="text-center mb-10">
        <p className=" text-xl font-semibold">
          Any questions you have we are here to answer.
        </p>
      </div>
    </div>
  );
};

export default QsectionTitle;
