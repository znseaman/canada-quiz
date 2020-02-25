import React from 'react'
import { render, fireEvent } from './tests/test-utils'
import App from './App'
import initialState from './context/initialState'

describe('App component', () => {
  it('renders without errors', async () => {
    const { container } = render(<App />)
    expect(container.innerHTML).toMatch('Question')
  })

  // @TODO: taking over 6s to complete, speed up
  it('shows Results page', async () => {
    const questions = initialState.questions.slice(0, 1)
    const initState = { ...initialState, questions }
    const { container, getByTestId, rerender } = render(<App />, { initState })

    fireEvent.click(getByTestId('option1'))
    fireEvent.click(getByTestId('next'))
    rerender(<App />)

    expect(container.innerHTML).toMatch(/result/i)
    expect(container.innerHTML).toMatch(/\d+%/i)
    expect(container.innerHTML).toMatch(/restart/)
  })

  it('resets after arriving to the Results page', async () => {
    const questions = initialState.questions.slice(0, 1)
    const initState = { ...initialState, questions }
    const { container, getByTestId, rerender } = render(<App />, { initState })

    fireEvent.click(getByTestId('option1'))
    fireEvent.click(getByTestId('next'))
    rerender(<App />)

    fireEvent.click(getByTestId('restart'))
    rerender(<App />)

    expect(container.innerHTML).toMatch('Question 1')
  })

  it('displays 2nd question', async () => {
    const questions = initialState.questions.slice(0, 2)
    const initState = { ...initialState, questions }
    const { container, getByTestId, rerender } = render(<App />, { initState })

    fireEvent.click(getByTestId('option1'))
    fireEvent.click(getByTestId('next'))
    rerender(<App />)

    expect(container.innerHTML).toMatch('Question 2')
  })
})