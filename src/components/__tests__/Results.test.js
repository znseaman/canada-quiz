import React from 'react'
import { render } from '../../tests/test-utils'
import Results from '../Results'
import initialState from '../../context/initialState'

describe('Results components', () => {
  it('renders without errors', () => {
    const questions = initialState.questions.slice(0, 2)
    const answers = [{ id: 1, answer: 'Interesting' }, { id: 2, answer: 'Cool' }]
    const initState = { ...initialState, questions, answers }
    const { getByText, getAllByText } = render(<Results />, { initState })

    expect(getByText(/result/i)).toBeInTheDocument()
    expect(getAllByText(/correct/i).length).toBe(2)
    expect(getByText(/restart/i)).toBeInTheDocument()
  })

  it('renders results with 100% percentage correct', () => {
    const questions = initialState.questions.slice(0, 2)
    const answers = [{ id: 1, answer: "The first people to live in Canada" }, { id: 2, answer: "First Nations, Métis and Inuit" }]
    const initState = { ...initialState, questions, answers }
    const { getByText } = render(<Results />, { initState })

    expect(getByText(/100%/i)).toBeInTheDocument()
  })
})