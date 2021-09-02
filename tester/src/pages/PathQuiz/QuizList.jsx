import React from "react";
import { useForm } from "react-hook-form";
import MyBtn from "../../components/UI/button/MyBtn";
import { MyInput } from "../../components/UI/input/MyInput";

const QuizList = ({ questions, endTest }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(endTest)}>
      {questions.map((q) => (
        <div key={q.id} className="questions">
          <h2>{q.question}</h2>
          <MyInput
            type="text"
            name={`${q.question}`}
            {...register(`${q.question}`, { required: true })}
          />
        </div>
      ))}

      <MyBtn type="submit" style={{ marginTop: "30px", marginBottom: "20px" }}>
        Завершить тест
      </MyBtn>
    </form>
  );
};

export default QuizList;
