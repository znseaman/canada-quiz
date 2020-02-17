import React from 'react'

const Result = ({ question, answer }) => {
  const renderResultMark = (question, answer) => {
    if (question.answer == answer.answer) {
      return <span data-testid="given-answer" className="correct">Correct</span>
    } else {
      return <span data-testid="given-answer" className="failed">Incorrect</span>
    }
  }

  return (
    <div>
      <span data-testid="given-question">{question.question}</span> - {renderResultMark(question, answer)}
    </div>
  )
}

export default Result
