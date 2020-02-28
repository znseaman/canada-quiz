import React from 'react'
import './App.css'
import Progress from './components/Progress'
import Question from './components/Question'
import Answers from './components/Answers'
import Results from './components/Results'
import { useStore } from './context/Provider'

import { SET_CURRENT_ANSWER, SET_CURRENT_QUESTION, SET_SHOW_RESULTS, SET_ANSWERS, START } from './reducers/types'

function App() {
  const { state, dispatch } = useStore()
  const { currentQuestion, currentAnswer, answers, showResults, questions, isStarted } = state

  const next = () => {
    if (!currentAnswer) return false
    const question = questions[currentQuestion]
    const answer = { id: question.id, answer: currentAnswer }
    dispatch({ type: SET_ANSWERS, payload: [...answers, answer] })

    dispatch({ type: SET_CURRENT_ANSWER, payload: '' })

    if (currentQuestion + 1 < questions.length) {
      dispatch({ type: SET_CURRENT_QUESTION, payload: currentQuestion + 1 })
    } else {
      dispatch({ type: SET_SHOW_RESULTS, payload: true })
    }
  }

  const start = () => dispatch({ type: START })

  return (
    <div className="container">
      {
        !isStarted ?
          <>
            <h1>Canadian Citizenship Quiz</h1>
            <button data-testid="start" className="btn btn-primary" onClick={start}>start</button>
          </>
          :
          showResults ?
            <Results />
            :
            <>
              <Progress total={questions.length} current={currentQuestion + 1}></Progress>
              <Question question={questions[currentQuestion].question}></Question>
              <Answers />
              <button data-testid="next" className="btn btn-primary" style={{ visibility: currentAnswer ? 'visible' : 'hidden' }} onClick={next}>Next</button>
            </>
      }
    </div>
  )
}

export default App
