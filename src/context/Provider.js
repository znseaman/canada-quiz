import React, { createContext, useReducer } from 'react'
import initialState from './initialState'
import quizReducer from '../reducers/QuizReducer'

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

  return <QuizContext.Provider value={{ state, dispatch }} {...props} />
}

export { Provider, useStore }