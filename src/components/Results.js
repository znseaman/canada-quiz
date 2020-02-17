import React from 'react'
import Result from '../components/Result'

const Results = ({ questions, answers, restart }) => {
  const renderResultsData = () => {
    return answers.map(answer => {
      const question = questions.find(question => question.id === answer.id)

      return (
        <Result key={question.id} question={question} answer={answer} />
      )
    })
  }

  return (
    <>
      <h2>Results</h2>
      <ul>{renderResultsData()}</ul>
      <button data-testid="restart" className="btn btn-primary" onClick={restart}>Restart</button>
    </>
  )
}

export default Results
