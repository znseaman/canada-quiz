import React from 'react'
import Result from '../components/Result'
import { RESET } from '../reducers/types'
import { useStore } from '../context/Provider'
import Button from '../ui/Button'

const Results = () => {
  const { state, dispatch } = useStore()
  const { questions, answers } = state
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

    const percentage = Math.round((totalCorrect / questions.length) * 100);

    return (
      <h1>Score: {percentage}%</h1>
    )
  }

  const restart = () => dispatch({ type: RESET })

  return (
    <div className="results">
      <h2>Results</h2>
      {renderResultsPercentage()}
      {renderResultsData()}
      <Button data-testid="restart" className="btn btn-primary" onClick={restart} primary={'#fff'} secondary={'#ffc107'} halo={'rgba(235, 196, 117, 1)'}>Restart</Button>
    </div>
  )
}

export default Results
