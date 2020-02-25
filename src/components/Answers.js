import React from 'react'
import Answer from './Answer'
import { useStore } from '../context/Provider'

const Answers = () => {
  const { state, dispatch } = useStore()
  const { currentAnswer, currentQuestion, questions } = state
  const { options, answer: correctAnswer } = questions[currentQuestion]

  return (
    <>
      {
        options.map((option, i) => (
          <Answer key={i} number={i + 1} answer={option} selected={currentAnswer == option} dispatch={dispatch} correctAnswer={correctAnswer} currentAnswer={currentAnswer} isCorrect={currentAnswer == correctAnswer}></Answer>
        ))
      }
    </>
  )
}

export default Answers
