import React from 'react'

const Answer = ({ number, answer, selected, setCurrentAnswer, isCorrect, currentAnswer, correctAnswer }) => {
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

  return (
    <button data-testid={`option${number}`} value={answer} className={classes.join(' ')} disabled={currentAnswer} onClick={setCurrentAnswer}>
      {answer}
    </button>
  )
}

export default Answer
