import React from 'react'

const Result = ({ question, answer }) => {
  const renderResultMark = (question, answer) => {
    if (question.answer != answer.answer) {
      return (
        <>
          <div style={{ marginTop: '18px' }}>
            <h3 data-testid="given-question">{question.id}. {question.question}</h3>
          </div>
          <div>
            <span className="correct">{question.answer}</span>
          </div >
          <div>
            <span className="failed">{answer.answer}</span>
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
