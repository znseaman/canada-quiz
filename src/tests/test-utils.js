import React, { useReducer } from 'react'
import { render } from '@testing-library/react'

import QuizContext from '../context/QuizContext'
import initialState from '../context/initialState'
import quizReducer from '../reducers/QuizReducer'

function customRender(ui, { initState = initialState } = {}) {
  function Wrapper(props) {
    const [state, dispatch] = useReducer(quizReducer, initState)

    return <QuizContext.Provider value={{ state, dispatch }} {...props} />
  }
  return render(ui, { wrapper: Wrapper })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }