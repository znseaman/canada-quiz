import React, { useReducer } from 'react'
import { render as rtlRender, fireEvent } from '@testing-library/react'
import App from './App'
import questions from './data/rawQuestions'
import QuizContext from './context/QuizContext'
import initialState from './context/initialState'
import quizReducer from './reducers/QuizReducer'

function render(ui, { initState = initialState } = {}) {
  function Wrapper(props) {
    const [state, dispatch] = useReducer(quizReducer, initState)

    return <QuizContext.Provider value={{ state, dispatch }} {...props} />
  }
  return rtlRender(ui, { wrapper: Wrapper })
}

describe('App component', () => {
  it.skip('renders without errors', async () => {
    const { container } = render(<App />)
    expect(container.innerHTML).toMatch('Question')
  })

  // @TODO: taking over 6s to complete, speed up
  it('shows Results page', async () => {
    const initState = { ...initialState, questions: questions.slice(0, 1) }
    const { container, getByTestId, rerender } = render(<App />, { initState })

    fireEvent.click(getByTestId('option1'))
    fireEvent.click(getByTestId('next'))
    rerender(<App />)

    expect(container.innerHTML).toMatch(/result/i)
    expect(container.innerHTML).toMatch(/correct/i)
    expect(container.innerHTML).toMatch(/restart/)
  })

  it('resets after arriving to the Results page', async () => {
    const initState = { ...initialState, questions: questions.slice(0, 1) }
    const { container, getByTestId, rerender } = render(<App />, { initState })

    fireEvent.click(getByTestId('option1'))
    fireEvent.click(getByTestId('next'))
    rerender(<App />)

    fireEvent.click(getByTestId('restart'))
    rerender(<App />)

    expect(container.innerHTML).toMatch('Question 1')
  })

  it('displays 2nd question', async () => {
    const initState = { ...initialState, questions: questions.slice(0, 2) }
    const { container, getByTestId, rerender } = render(<App />, { initState })

    fireEvent.click(getByTestId('option1'))
    fireEvent.click(getByTestId('next'))
    rerender(<App />)

    expect(container.innerHTML).toMatch('Question 2')
  })
})