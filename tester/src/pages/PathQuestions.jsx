import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MyInput from "../components/UI/input/MyInput";

const PathQuestions = () => {
  const [questions, setQuestion] = useState([
    {
      id: 1,
      object: "math",
      theme: "plus",
      question: "3+1",
      answer: "4",
    },
    {
      id: 2,
      object: "math",
      theme: "plus",
      question: "2+1",
      answer: "3",
    },
  ]);

  const [userAnswer, setUserAnswer] = useState([]);
  const [userAnswer2, setUserAnswer2] = useState([]);
  const [uAnswersArray, setUAnswersArray] = useState([]);

  const [rightAnswers, setRightAnswers] = useState(
    questions.map((q) => q.answer)
  );

  function checkAnswers(e) {
    e.preventDefault();
    if (rightAnswers.join(",") === uAnswersArray.join(",")) {
      alert("same members");
    } else alert("not a match");
  }

  function giveAnswer(ans, setter) {
    setter(ans);
  }

  function endTest(...args) {
    if (args) {
      setUAnswersArray([...uAnswersArray, args]);
    }
    setUserAnswer('');
    setUserAnswer2('');
  }

  if (!questions.length) {
    return <h1>Вопросов не найдено</h1>;
  }

  return (
    <div className="flex-wrapper">
      <h1>{questions.object}</h1>
      <div className="questions">
        <TransitionGroup>
          {questions.map((q) => (
            <CSSTransition key={q.id} timeout={500} classNames="question">
              <div>
                <p>{q.question}</p>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => giveAnswer(e.target.value, setUserAnswer)}
          />
        </div>
        <div className="input">
          <input
            type="text"
            value={userAnswer2}
            onChange={(e) => giveAnswer(e.target.value, setUserAnswer2)}
          />
        </div>
        <button
          type="submit"
          onClick={
            (e)=>checkAnswers(e)
          }
          onFocus={(e) => {
            e.preventDefault();
            endTest(userAnswer, userAnswer2);}}
        >
          Завершить
        </button>
      </div>
    </div>
  );
};

export default PathQuestions;
