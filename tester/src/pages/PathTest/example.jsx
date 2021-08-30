import React, { useState } from "react";

const PathTest = () => {
  const questions = [
    {
      id: 1,
      questionText: "4+1",
      answerOptions: [
        { answerText: "3", isCorrect: 0 },
        { answerText: "5", isCorrect: 1 },
        { answerText: "8", isCorrect: 0 },
        { answerText: "10", isCorrect: 0 },
      ],
    },
    {
      id: 2,
      questionText: "4+2",
      answerOptions: [
        { answerText: "3", isCorrect: 0 },
        { answerText: "6", isCorrect: 1 },
        { answerText: "8", isCorrect: 0 },
        { answerText: "10", isCorrect: 0 },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnsewrOptionClick = (isCorrect, currentQuestion) => {
    if (isCorrect) {
      // setUserAnswer(...userAnswer, ...userAnswer.rightAnswer, `Правильный ответ 1`)
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else setShowResult(true);
  };
  return (

    <div>
      {showResult ? (
        <div className="section__score">
          Правильный ответов {score} из {questions.length}
        </div>
      ) : (
        <div className="test">
          <div className="question__section">
            <div className="question__count">
              Вопрос <span>{currentQuestion + 1}</span> / {questions.length}
            </div>
            <div className="question__text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer__section">
            {questions[currentQuestion].answerOptions.map((item) => (
              <button
                onClick={() => {
                  handleAnsewrOptionClick(item.isCorrect);
                }}
              >
                {item.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>

    
  );
};

export default PathTest;
