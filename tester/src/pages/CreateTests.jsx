import React, { useState } from "react";

const CreateTests = () => {
  // let tests = [];
  const [newTest, setNewTest] = useState({
    id: Date.now(),
    name: "",
    questions: [],
  });

  function enterAnswer(answerText, answerId, questionId) {
    setNewTest({
      ...newTest,
      questions: [...newTest.questions].map((question) =>
        question.id === questionId
          ? {
              ...question,
              answerOptions: [...question.answerOptions].map((answer) =>
                answer.id === answerId
                  ? { ...answer, answerText: answerText }
                  : answer
              ),
            }
          : question
      ),
    });
  }

  function addAnswer(questionId) {
    setNewTest({
      ...newTest,
      questions: [...newTest.questions].map((question) =>
        question.id === questionId
          ? {
              ...question,
              answerOptions: [
                ...question.answerOptions,
                {
                  id: question.answerOptions.length,
                  answerText: "",
                  isCorrect: false,
                },
              ],
            }
          : question
      ),
    });
  }

  function rightAnswerHandle(checked, answerId, questionId) {
    setNewTest({
      ...newTest,
      questions: [...newTest.questions].map((question) =>
        question.id === questionId
          ? {
              ...question,
              answerOptions: [...question.answerOptions].map((answer) =>
                answer.id === answerId
                  ? checked
                    ? { ...answer, isCorrect: true }
                    : { ...answer, isCorrect: false }
                  : answer
              ),
            }
          : question
      ),
    });
  }

  function addQuestion() {
    setNewTest({
      ...newTest,
      questions: [
        ...newTest.questions,
        { id: newTest.questions.length, questionText: "", answerOptions: [] },
      ],
    });
  }

  function enterQuestion(questionText, questionId) {
    setNewTest({
      ...newTest,
      questions: [...newTest.questions].map((question) =>
        question.id === questionId
          ? { ...question, questionText: questionText }
          : question
      ),
    });
  }


  function pushToLocalStorage() {
    // localStorage.setItem('tests', JSON.stringify(newTest))
    console.log(localStorage);
  }

  return (
    <div>
      <p>Введите название теста</p>
      <input
        value={newTest.name}
        onChange={(e) => setNewTest({ ...newTest, name: e.target.value })}
      />

      <button onClick={() => addQuestion()}>Добавить вопрос</button>
      {newTest.questions.map((q) => (
        <div key={q.id}>
          <h2>Введите вопрос</h2>
          <input
            value={q.questionText}
            onChange={(e) => enterQuestion(e.target.value, q.id)}
          />
          <button onClick={() => addAnswer(q.id)}>добавить ответ</button>
          {q.answerOptions.map((a) => (
            <div key={a.id}>
              <h2>Введите ответ</h2>
              <input
                value={a.answerText}
                onChange={(e) => enterAnswer(e.target.value, a.id, q.id)}
              />
              <input
                type="checkbox"
                value={a.isCorrect}
                onChange={(e) => {
                  rightAnswerHandle(e.target.checked, a.id, q.id);
                }}
              />
            </div>
          ))}
        </div>
      ))}

      <hr />
      <button onClick={()=>pushToLocalStorage()}>Добавить тест</button>
    </div>
  );
};

export default CreateTests;
