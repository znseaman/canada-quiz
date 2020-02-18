import React from 'react'
import { SET_CURRENT_ANSWER } from '../reducers/types'

const Answer = ({ number, answer, selected, dispatch }) => {
  let classes = ['answer']
  if (selected) classes.push('selected')

  const onClick = e => dispatch({ type: SET_CURRENT_ANSWER, payload: e.target.value })

  return (
    <button data-testid={`option${number}`} value={answer} className={classes.join(' ')} onClick={onClick}>
      {answer}
    </button>
  )
}

export default Answer
