import React, { useContext } from 'react'
import Answer from './Answer'

import QuizContext from '../context/QuizContext'

const Answers = () => {
  const { state, dispatch } = useContext(QuizContext)
  const { currentAnswer, currentQuestion, questions } = state;
  const { options } = questions[currentQuestion]

  return (
    <>
      {
        options.map((option, i) => (
          <Answer key={i} number={i + 1} answer={option} selected={currentAnswer == option} dispatch={dispatch}></Answer>
        ))
      }
    </>
  )
}

export default Answers
