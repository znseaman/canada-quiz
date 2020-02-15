import React from 'react'
import Answer from './Answer'

const Answers = ({ options, currentAnswer, handleClick }) => (
  <>
    {
      options.map((option, i) => (
        <Answer key={i} number={i + 1} answer={option} selected={currentAnswer == option} handleClick={handleClick}></Answer>
      ))
    }
  </>
)

export default Answers
