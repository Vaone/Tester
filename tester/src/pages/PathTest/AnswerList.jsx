import React from "react";

const AnswerList = ({
  answerOptions,
  question,
  rightAnswer,
  register,
  show,
}) => {
  return (
    <div>
      {answerOptions.map((a) => (
        <div key={a.answerText}>
          <input
            type="radio"
            value={`${a.answerText}`}
            name={`${question}`}
            {...register(`${question}`, { required: true })}
          />
          {show ? (
            <label className={rightAnswer ? "basic show" : "basic"}>
              {a.answerText}
            </label>
          ) : (
            <label>{a.answerText}</label>
          )}
        </div>
      ))}
    </div>
  );
};

export default AnswerList;
