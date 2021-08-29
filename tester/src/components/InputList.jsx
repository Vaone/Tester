import React from "react";
import { giveAnswer } from "../utils/giveAnswer";

const InputList = ({
  endTest,
  setUserAnswer,
  setUserAnswer2,
  userAnswer,
  userAnswer2,
}) => {
  return (
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
        onClick={(e) => {
          e.preventDefault();
          endTest(userAnswer, userAnswer2);
        }}
      >
        Завершить
      </button>
    </div>
  );
};

export default InputList;
