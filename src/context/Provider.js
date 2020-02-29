import React, { createContext, useReducer } from 'react'
import initialState from './initialState'
import quizReducer from '../reducers/QuizReducer'
import { SET_CURRENT_ANSWER, SET_CURRENT_QUESTION, SET_SHOW_RESULTS, SET_ANSWERS, START } from '../reducers/types'

const QuizContext = createContext()

const useStore = () => {
  const store = React.useContext(QuizContext)
  if (!store) {
    throw new Error('Cannot use `useStore` outside of a QuizProvider')
  }
  return store;
}

const Provider = ({ initState = initialState, ...props } = {}) => {
  const [state, dispatch] = useReducer(quizReducer, initState)
  const { currentQuestion, currentAnswer, answers, questions } = state

  /* Dispatch Actions */
  const start = () => dispatch({ type: START })

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

  const setCurrentAnswer = e => {
    dispatch({ type: SET_CURRENT_ANSWER, payload: e.target.value })
  }

  return <QuizContext.Provider value={{ state, dispatch, start, next, setCurrentAnswer }} {...props} />
}

export { Provider, useStore }