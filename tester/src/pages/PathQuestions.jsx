import React, {useState} from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PathQuestions = () => {
  const [questions, setQuestion] = useState([
    {
      id: 1,
      object: 'math',
      question: '3+1',
      answer: '4'
    },
    {
      id: 2,
      object: 'math',
      question: '2+1',
      answer: '4'
    },
  ])

  const [uAnswer, setUAnswer] = useState([])
  const [uAnswer2, setUAnswer2] = useState([])
  const [uAnswersArray, setuAnswersArray] = useState([])

  function giveAnswer(ans, setAnswer) {
    setuAnswersArray([...uAnswersArray, ans]);
    setAnswer('');
  }

  function endTest() {
    if (uAnswer) {
      giveAnswer(uAnswer, setUAnswer);
    }
    if (uAnswer2) {
      giveAnswer(uAnswer2, setUAnswer2);
    }
    console.log(uAnswersArray);
  }

  if (!questions.length) {
    return <h1>Вопросов не найдено</h1>;
  }
  return (
    <div className='flex-wrapper'>
      <h1>{questions.object}</h1>
      <div className='questions'>
        <TransitionGroup>
          {questions.map(q => (
            <CSSTransition key={q.id} timeout={500} classNames="question">
              <div>
                <p>{q.question}</p>
                
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <div className='inputs'>
        <div className='input'>
          <input
            value = {uAnswer}
            onChange = {(e)=>setUAnswer(e.target.value)}
          />
          {/* <button onClick={()=>giveAnswer(uAnswer, setUAnswer)}>Подтвердить ответ</button> */}
        </div>
        <div className='input'>
          <input
            value = {uAnswer2}
            onChange = {(e)=>setUAnswer2(e.target.value)}
          />
          {/* <button onClick={()=>giveAnswer(uAnswer2, setUAnswer2)}>Подтвердить ответ</button> */}
        </div>
        
        <button onClick={()=>{endTest()}}>Завершить</button>
        
      </div>
    </div>
  )
};

export default PathQuestions;