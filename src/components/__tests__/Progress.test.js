import React from 'react'
import { render } from '@testing-library/react'
import Progress from '../Progress'
import questions from '../../data/rawQuestions'

describe('Progress component', () => {
  it('renders without error', () => {
    const props = {
      current: 1,
      total: questions.length
    }
    const { container } = render(<Progress {...props} />)

    expect(container.innerHTML).toMatch(`${props.current} of ${props.total}`)
  });
})