import React, { useMemo, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import InputList from "../components/InputList";
import {Link} from 'react-router-dom';
import MyBtn from '../components/UI/button/MyBtn'

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

  const checkAnswers = useMemo(() => {
    const answersArray = [];
    if (uAnswersArray.length) {
      for (let i = 0; i < uAnswersArray.length; i++) {
        if (uAnswersArray[i] === rightAnswers[i]) {
          answersArray.push(`Правильный ответ ${i + 1}`);
        } else {
          answersArray.push(`НЕравильный ответ ${i + 1}`);
        }
      }
      return answersArray;
    }
  }, [uAnswersArray]);

  function endTest(...args) {
    if (args) {
      setUAnswersArray(...uAnswersArray, args);
    }
    setUserAnswer("");
    setUserAnswer2("");
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
      <InputList
        endTest={endTest}
        userAnswer={userAnswer}
        userAnswer2={userAnswer2}
        setUserAnswer={setUserAnswer}
        setUserAnswer2={setUserAnswer2}
      />

      {/* <Answers /> */}



      <MyBtn style={{
        textDecoration: 'none',
        color: 'black'
      }}><Link to="/pathQuestions/step1">Начать тест</Link></MyBtn>
    </div>
  );
};

export default PathQuestions;
