import React, { useMemo } from "react";

const AnswerList = ({ answerOptions, question, register, show }) => {

  const sortedAnswers = useMemo(() => {
    return [...answerOptions].sort(() => Math.random() - 0.5)
  }, []);

  return (
    <div>
      {sortedAnswers.map((a) => (
        <div key={a.answerText}>
          <input
            type="radio"
            value={`${a.answerText}`}
            name={`${question}`}
            {...register(`${question}`, { required: true })}
          />
          {show ? (
            <label className={a.isCorrect ? "basic show" : "basic"}>
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
