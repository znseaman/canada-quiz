import React, { useState, useReducer } from 'react'
import './App.css'
import Progress from './components/Progress'
import Question from './components/Question'
import Answers from './components/Answers'
import Results from './components/Results'

import { SET_CURRENT_ANSWER, SET_CURRENT_QUESTION, SET_SHOW_RESULTS, SET_ANSWERS, RESET } from './reducers/types'

function quizReducer(state, { type, payload }) {
  switch (type) {
    case SET_CURRENT_ANSWER:
      return {
        ...state,
        currentAnswer: payload
      }
    case SET_ANSWERS:
      return {
        ...state,
        answers: payload
      }
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: payload
      }
    case SET_SHOW_RESULTS:
      return {
        ...state,
        showResults: payload
      }
    case RESET:
      return {
        ...state,
        answers: [],
        currentAnswer: '',
        currentQuestion: 0,
        showResults: false
      }
    default:
      return state
  }
}

function App({ questions }) {
  const initialState = {
    currentQuestion: 0,
    currentAnswer: '',
    answers: [],
    showResults: false
  }

  const [state, dispatch] = useReducer(quizReducer, initialState)
  const { currentQuestion, currentAnswer, answers, showResults } = state
  const question = questions[currentQuestion]

  const next = () => {
    if (!currentAnswer) return false
    const answer = { id: question.id, answer: currentAnswer }
    dispatch({ type: SET_ANSWERS, payload: [...answers, answer] })

    dispatch({ type: SET_CURRENT_ANSWER, payload: '' })

    if (currentQuestion + 1 < questions.length) {
      dispatch({ type: SET_CURRENT_QUESTION, payload: currentQuestion + 1 })
    } else {
      dispatch({ type: SET_SHOW_RESULTS, payload: true })
    }
  }

  const restart = () => dispatch({ type: RESET })

  return (
    <div className="container">
      {
        showResults ?
          <>
            <Results questions={questions} answers={answers} />
            <button data-testid="restart" className="btn btn-primary" onClick={restart}>Restart</button>
          </>
          :
          <>
            <Progress total={questions.length} current={currentQuestion + 1}></Progress>
            <Question question={question.question}></Question>
            <Answers options={question.options} currentAnswer={currentAnswer} dispatch={dispatch}></Answers>
            <button data-testid="next" className="btn btn-primary" style={{ visibility: currentAnswer ? 'visible' : 'hidden' }} onClick={next}>Confirm and Continue</button>
          </>
      }
    </div>
  )
}

export default App
