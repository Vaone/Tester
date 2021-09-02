import React, { useState } from "react";
import cl from "../components/UI/navbar/navbar.module.css";
import PathTest from "./PathTest/PathTest";
import MyBtn from "../components/UI/button/MyBtn";

const SelectTest = () => {
  const tests = [
    {
      id: 1,
      name: "test1",
      questions: [
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
      ],
    },
    {
      id: 2,
      name: "test2",
      questions: [
        {
          id: 123,
          questionText: "4+2",
          answerOptions: [
            { answerText: "3", isCorrect: false },
            { answerText: "6", isCorrect: true },
            { answerText: "8", isCorrect: false },
            { answerText: "10", isCorrect: false },
          ],
        },
        {
          id: 2,
          questionText: "4+3",
          answerOptions: [
            { answerText: "3", isCorrect: false },
            { answerText: "7", isCorrect: true },
            { answerText: "8", isCorrect: false },
            { answerText: "10", isCorrect: false },
          ],
        },
      ],
    },
  ];

  const [questions, setQuestions] = useState([]);

  function selectOnClick(index) {
    setQuestions(tests[index].questions);
  }

  return (
    <div>
      <div className={cl.navbar}>
        {tests.map((test, index) => (
          <MyBtn key={test.id} onClick={() => selectOnClick(index)}>
            Выберите тест {test.name}
          </MyBtn>
        ))}
      </div>
      
      {questions.length ? <PathTest questions={questions}/> : <div>Выберите тест</div>}
    </div>
  );
};

export default SelectTest;
