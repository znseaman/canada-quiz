import React from 'react'

const Result = ({ question, answer }) => {
  const renderResultMark = (question, answer) => {
    // eslint-disable-next-line eqeqeq
    if (question.answer != answer.answer) {
      return (
        <>
          <div style={{ marginTop: '18px' }}>
            <h3 data-testid="given-question">{question.id}. {question.question}</h3>
          </div>
          <div>
            <span className="correct" data-testid="correct-answer">{question.answer}</span>
          </div >
          <div>
            <span className="failed" data-testid="given-answer">{answer.answer}</span>
          </div >
        </>
      )
    }
  }

  return (
    <>
      {renderResultMark(question, answer)}
    </>
  )
}

export default Result
