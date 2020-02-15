import React, { useState } from 'react'
import './App.css'
import Progress from './components/Progress'
import Question from './components/Question'
import Answers from './components/Answers'

function App({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [answers, setAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)
  const question = questions[currentQuestion]

  const handleClick = e => setCurrentAnswer(e.target.value)
  const next = () => {
    if (!currentAnswer) return false
    const answer = { id: question.id, answer: currentAnswer }
    setAnswers([
      ...answers,
      answer
    ])

    setCurrentAnswer('')

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const renderResultMark = (question, answer) => {
    if (question.answer == answer.answer) {
      return <span className="correct">Correct</span>
    } else {
      return <span className="failed">Incorrect</span>
    }
  }

  const renderResultsData = () => {
    return answers.map(answer => {
      const question = questions.find(question => question.id === answer.id)

      return (
        <div key={question.id}>
          {question.question} - {renderResultMark(question, answer)}
        </div>
      )
    })
  }

  const restart = () => {
    setAnswers([])
    setCurrentAnswer('')
    setCurrentQuestion(0)
    setShowResults(false)
  }

  if (showResults) {
    return (
      <div className="container">
        <h2>Results</h2>
        <ul>{renderResultsData()}</ul>
        <button className="btn btn-primary" onClick={restart}>Restart</button>
      </div>
    )
  }

  return (
    <div className="container">
      <Progress total={questions.length} current={currentQuestion + 1}></Progress>
      <Question question={question.question}></Question>
      <Answers options={question.options} currentAnswer={currentAnswer} handleClick={handleClick}></Answers>
      <button data-testid="next" className="btn btn-primary" style={{ visibility: currentAnswer ? 'visible' : 'hidden' }} onClick={next}>Confirm and Continue</button>
    </div>
  )
}

export default App
