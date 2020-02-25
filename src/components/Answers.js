import React, { useEffect, useState } from 'react'
import Answer from './Answer'
import { useStore } from '../context/Provider'
import shuffle from '../utils/shuffle'

const Answers = () => {
  const { state, dispatch } = useStore()
  const { currentAnswer, currentQuestion, questions } = state
  const { options, answer: correctAnswer } = questions[currentQuestion]

  const [shuffledOptions, setShuffledOptions] = useState([])

  useEffect(() => {
    if (!currentAnswer) setShuffledOptions(shuffle(options))
  }, [currentAnswer, options])

  return (
    <>
      {
        shuffledOptions.map((option, i) => (
          // eslint-disable-next-line eqeqeq
          <Answer key={i} number={i + 1} answer={option} selected={currentAnswer == option} dispatch={dispatch} correctAnswer={correctAnswer} currentAnswer={currentAnswer} isCorrect={currentAnswer == correctAnswer}></Answer>
        ))
      }
    </>
  )
}

export default Answers
