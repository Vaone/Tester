import React, { useState } from "react";
import "./path.css";

const PathTest = () => {
  const questions = [
    {
      id: 1,
      questionText: "4+1",
      answerOptions: [
        { answerText: "3", isCorrect: false },
        { answerText: "5", isCorrect: true },
        { answerText: "8", isCorrect: false },
        { answerText: "10", isCorrect: false },
      ],
    },
    {
      id: 2,
      questionText: "4+2",
      answerOptions: [
        { answerText: "3", isCorrect: false },
        { answerText: "6", isCorrect: true },
        { answerText: "8", isCorrect: false },
        { answerText: "10", isCorrect: false },
      ],
    },
  ];

  const [show, setShow] = useState(false);

  function showRightAnswer() {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  return (
    <div>
      <div className="test">
        {questions.map((q) => (
          <div key={q.id} className="question__section">
            <div className="question__text">{q.questionText}</div>
            <div className="answer__section">
              {q.answerOptions.map((a) => (
                <div key={a.answerText}>
                  <input
                    type="radio"
                    className="answer"
                    name={q.questionText}
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
            <br />
          </div>
        ))}

        <br />
        <hr />
        <br />

        <button onClick={() => showRightAnswer()}>Показать ответы</button>
      </div>
    </div>
  );
};

export default PathTest;
