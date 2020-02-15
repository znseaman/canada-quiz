import React from 'react'

const Answer = ({ number, answer, selected, handleClick }) => {
  let classes = ['answer']
  if (selected) classes.push('selected')

  return (
    <button data-testid={`option${number}`} value={answer} className={classes.join(' ')} onClick={handleClick}>
      {answer}
    </button>
  )
}

export default Answer
