import React from 'react'
import { render } from '@testing-library/react'
import Answers from '../Answers'

const props = {
  options: [
    'Cool',
    'OK',
    'Happy',
    'Anxious'
  ],
  currentAnswer: '',
  // @TODO: mock this function using jest
  handleClick: () => { }
}

describe('Answers component', () => {
  it('renders 4 answers', () => {
    const { container } = render(<Answers {...props} />)
    const answers = Array.from(container.getElementsByTagName('button'))
    expect(answers.length).toBe(4)

    // @TODO: find a more efficient way to check the text
    answers.forEach((answer, i) => {
      expect(answer.innerHTML).toBe(props.options[i])
    })
  })
  it('renders answers with empty currentAnswer', () => {
    props.currentAnswer = ''
    const { container } = render(<Answers {...props} />)

    // @TODO: find a more efficient way to check the classes
    expect(container.innerHTML).not.toMatch(`selected`)
  })

  it('renders answers with filled currentAnswer', () => {
    props.currentAnswer = props.options[0]
    const { container } = render(<Answers {...props} />)

    // @TODO: find a more efficient way to check the classes
    expect(container.innerHTML).toMatch(`selected`)
  })
})