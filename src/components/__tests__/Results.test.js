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
})