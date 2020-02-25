import React from 'react'
import { SET_CURRENT_ANSWER } from '../reducers/types'

const Answer = ({ number, answer, selected, dispatch, isCorrect, currentAnswer, correctAnswer }) => {
  let classes = ['answer']
  if (selected) {
    classes.push('selected')

    const className = isCorrect ? 'correct' : 'incorrect'
    classes.push(className)
  }
  else {
    // highlight the correct answer
    // eslint-disable-next-line eqeqeq
    if (currentAnswer && correctAnswer == answer) {
      classes.push('not-selected')
      classes.push('correct')
    }
  }

  const onClick = e => dispatch({ type: SET_CURRENT_ANSWER, payload: e.target.value })

  return (
    <button data-testid={`option${number}`} value={answer} className={classes.join(' ')} disabled={currentAnswer} onClick={onClick}>
      {answer}
    </button>
  )
}

export default Answer
