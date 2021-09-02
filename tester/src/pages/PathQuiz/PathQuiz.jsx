import React, { useEffect, useState, useMemo } from "react";

import { compare } from "../../utils/compare";
import QuizList from "./QuizList";
import AnswersCheckList from "./AnswersCheckList";

const PathQuiz = ({ questions }) => {
  const [show, setShow] = useState(false);
  const [checkAnswers, setCheckAnswers] = useState([]);
  const [rightAnswerCounter, setRightAnswerCounter] = useState();
  const [userAns, setUserAns] = useState([]);

  function endTest(data) {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
    // массив ответов
    const userAnswers = Object.values(data);

    setUserAns(userAnswers);
    // проверка есть ли пустые значения
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

  const rightAnswers = useMemo(() => questions.map((q) => q.answer), []);

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
        <QuizList questions={questions} endTest={endTest} />

        {/* <QuestionsList 
          showRightAnswer={showRightAnswer}
          questions={questions}
          show={show}
        /> */}
        <AnswersCheckList show={show} rightAnswerCounter={rightAnswerCounter} userAnswers={userAns} rightAnswers={rightAnswers}/>
      </div>
    </div>
  );
};

export default PathQuiz;
