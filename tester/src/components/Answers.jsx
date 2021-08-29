import React from 'react';

const Answers = ({answers}) => {
  return (
    <div>
      {answers.map(wrongOrNot => <p>{wrongOrNot}</p>)}
    </div>
  )
};

export default Answers;