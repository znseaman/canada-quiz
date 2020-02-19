import React from 'react'
import Answer from './Answer'
import { useStore } from '../context/Provider'

const Answers = () => {
  const { state, dispatch } = useStore()
  const { currentAnswer, currentQuestion, questions } = state
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
