import React from "react";
import Loader from '../../components/UI/loader/Loader';

const AnswersCheckList = ({ show, rightAnswerCounter, userAnswers, rightAnswers }) => {

  return (
    <div>
      {show ? (
        <div className="answers">
          <div>правильные ответы: {rightAnswerCounter}</div>
          <br /> <hr /> <br />

          <div style={{ display: "flex" }}>
            <div>
              Ответы Пользователя:
              <ul style={{ listStyle: "none" }}>
                {userAnswers ? userAnswers.map((a, index) => (
                  <li key={index}>
                    <p>{index+1}. Ваш ответ: {a}</p>
                    <hr />
                  </li>
                )) : <Loader />}
                
              </ul>
            </div>
            <div style={{ marginLeft: "30px" }}>
              Правильные ответы:
              <ul style={{ listStyle: "none" }}>
                {rightAnswers.map((a, index)=>(
                   <li>
                    <p>{index+1}. Правильный ответ: {a}</p>
                   <hr />
                 </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AnswersCheckList;
