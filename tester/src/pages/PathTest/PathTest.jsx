import React, { useEffect, useState, useMemo } from "react";
import { compare } from "../../utils/compare";
import "./path.css";
import QuestionsList from "./QuestionsList";

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
  const [checkAnswers, setCheckAnswers] = useState([]);
  const [rightAnswerCounter, setRightAnswerCounter] = useState();

  function showRightAnswer(data) {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }

    const userAnswers = Object.values(data);
    for (let i = 0; i < userAnswers.length; i++) {
      let hasNull = false;
      if (userAnswers[i] == null) {
        hasNull = true;
        break;
      }
      if (!hasNull) {
        setCheckAnswers(compare(userAnswers, rightAnswers));
      }
    }
  }

  const rightAnswers = useMemo(() => {
    const answers = questions.map((q) => q.answerOptions);
    for (let i = 0; i < answers.length; i++) {
      answers[i] = answers[i].filter((a) => a.isCorrect)[0].answerText;
    }
    return answers;
  }, []);

  const righAnsewrsCount = () => {
    if (checkAnswers.length) {
      setRightAnswerCounter(
        `Правильных ответов ${questions.length - checkAnswers.length} из ${
          questions.length
        }`
      );
    } else {
      setRightAnswerCounter("все ответы верны");
    }
  };

  useEffect(() => {
    righAnsewrsCount();
  }, [checkAnswers]);

  return (
    <div>
      <div className="test">
        <QuestionsList 
          showRightAnswer={showRightAnswer}
          questions={questions}
          show={show}
        />
        {show ? (
          <div className="answers">
            <br /> <hr /> <br />
            правильные ответы: {rightAnswerCounter}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default PathTest;
