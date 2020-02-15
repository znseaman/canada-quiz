import React from 'react'
import { render } from '@testing-library/react'
import Question from '../Question'

describe('Question component', () => {
  it('shows question', () => {
    const question = "How are you?"
    const { getByText } = render(<Question question={question} />)
    const title = getByText(question)
    expect(title).toBeInTheDocument()
  })
})