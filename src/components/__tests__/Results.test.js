import React from 'react'
import { render } from '@testing-library/react'
import Results from '../Results'
import questions from '../../data/rawQuestions'

describe('Results components', () => {
  it('renders without errors', () => {
    const props = {
      questions,
      answers: [{ id: 1, answer: 'Interesting' }, { id: 2, answer: 'Cool' }],
      restart: () => { }
    }
    const { container } = render(<Results {...props} />)
    expect(container.innerHTML).toMatch(/result/i)
    expect(container.innerHTML).toMatch(/correct/i)
    expect(container.innerHTML).toMatch(/restart/)
  })

  it('renders results with 100% percentage correct', () => {
    const props = {
      questions,
      answers: [{ id: 1, answer: "The first people to live in Canada" }, { id: 2, answer: "First Nations, Métis and Inuit" }],
      restart: () => { }
    }
    const { container } = render(<Results {...props} />)
    expect(container.innerHTML).toMatch(/%/i)
  })
})