import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'
import questions from './data/rawQuestions'

describe('App component', () => {
  it('renders without errors', async () => {
    // Limit to 1 question for this test
    const qs = questions.slice(0, 1)
    const { container } = render(<App questions={qs} />)
    expect(container.innerHTML).toMatch('Question')
  })

  // @TODO: taking over 6s to complete, speed up
  it('shows Results page', async () => {
    // Limit to 1 question for this test
    const qs = questions.slice(0, 1)
    const { container, getByTestId, rerender } = render(<App questions={qs} />)

    fireEvent.click(getByTestId('option1'))
    fireEvent.click(getByTestId('next'))
    rerender(<App questions={qs} />)

    expect(container.innerHTML).toMatch(/result/i)
    expect(container.innerHTML).toMatch(/correct/i)
    expect(container.innerHTML).toMatch(/restart/)
  })

  it('resets after arriving to the Results page', async () => {
    // Limit to 1 question for this test
    const qs = questions.slice(0, 1)
    const { container, getByTestId, rerender } = render(<App questions={qs} />)

    fireEvent.click(getByTestId('option1'))
    fireEvent.click(getByTestId('next'))
    rerender(<App questions={qs} />)

    fireEvent.click(getByTestId('restart'))
    rerender(<App questions={qs} />)

    expect(container.innerHTML).toMatch('Question 1')
  })

  it('displays 2nd question', async () => {
    // Limit to 2 question for this test
    const qs = questions.slice(0, 2)
    const { container, getByTestId, rerender } = render(<App questions={qs} />)

    fireEvent.click(getByTestId('option1'))
    fireEvent.click(getByTestId('next'))
    rerender(<App questions={qs} />)

    expect(container.innerHTML).toMatch('Question 2')
  })
})