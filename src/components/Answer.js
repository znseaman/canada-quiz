import React from 'react'
import Button from '../ui/Button'

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
    <Button data-testid={`option${number}`} value={answer} className={classes.join(' ')} disabled={currentAnswer} primary={'#fff'} secondary={'transparent'} onClick={setCurrentAnswer}>
      {answer}
    </Button>
  )
}

export default Answer
