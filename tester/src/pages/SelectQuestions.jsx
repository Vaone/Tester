import React, {useState} from "react";
import cl from "../components/UI/navbar/navbar.module.css";
import MyBtn from "../components/UI/button/MyBtn";
import PathQuiz from '../pages/PathQuiz/PathQuiz';

const SelectQuestions = () => {
  const questionnaire = [
    {
      id: 1,
      title: "questionnaire1",
      questions: [
        { id: 1, question: "4+1", answer: "5" },
        { id: 2, question: "4+4", answer: "8" },
      ],
    },
    {
      id: 2,
      title: "questionnaire3",
      questions: [
        { id: 1, question: "4+1", answer: "5" },
        { id: 2, question: "4+4", answer: "8" },
      ],
    },
  ];

  const [questions, setQuestions] = useState([]);

  function selectOnClick(index) {
    setQuestions(questionnaire[index].questions);
  }

  return (
    <div>
      <div className={cl.navbar}>
        {questionnaire.map((test, index) => (
          <MyBtn key={test.id} onClick={() => selectOnClick(index)}>
            Выберите тест {test.title}
          </MyBtn>
        ))}
      </div>

      {questions.length ? <PathQuiz questions={questions}/> : <div>Выберите вопросник</div>}
    </div>
  );
};

export default SelectQuestions;
