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

  const renderResultsPercentage = () => {
    // return # of correct answers
    const totalCorrect = answers.reduce((acc, curr, i) => {
      const question = questions[i]
      return question.answer === curr.answer ? acc + 1 : acc
    }, 0)

    const percentage = (totalCorrect / questions.length) * 100;

    return (
      <div>Score: {percentage}%</div>
    )
  }

  return (
    <>
      <h2>Results</h2>
      <ul>{renderResultsPercentage()}</ul>
      <ul>{renderResultsData()}</ul>
      <button data-testid="restart" className="btn btn-primary" onClick={restart}>Restart</button>
    </>
  )
}

export default Results
