import React from "react";
import AnswerList from "./AnswerList";
import { useForm } from "react-hook-form";

const QuestionsList = ({showRightAnswer, questions, show}) => {

  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(showRightAnswer)}>
      {questions.map((q) => (
        <div key={q.id} className="question__section">
          <h1>{q.questionText}</h1>
          <AnswerList
            answerOptions={q.answerOptions}
            question={q.questionText}
            register={register}
            show={show}
          />
        </div>
      ))}
      <br /> <hr /> <br />
      <button type="submit"> Показать/скрыть</button>
    </form>
  );
};

export default QuestionsList;
