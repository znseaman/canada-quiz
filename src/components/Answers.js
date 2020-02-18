import React from 'react'
import Answer from './Answer'

const Answers = ({ options, currentAnswer, dispatch }) => (
  <>
    {
      options.map((option, i) => (
        <Answer key={i} number={i + 1} answer={option} selected={currentAnswer == option} dispatch={dispatch}></Answer>
      ))
    }
  </>
)

export default Answers
