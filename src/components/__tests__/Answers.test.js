import React from 'react'
import { render } from '../../tests/test-utils'
import Answers from '../Answers'
import initialState from '../../context/initialState'

describe('Answers component', () => {
  it('renders 4 answers', () => {
    const { container } = render(<Answers />)
    const answers = Array.from(container.getElementsByTagName('button'))
    expect(answers.length).toBe(4)

    // @TODO: find a more efficient way to check the text
    answers.forEach((answer, i) => {
      expect(answer.innerHTML).toBe(initialState.questions[0].options[i])
    })
  })

  it('renders answers with empty currentAnswer', () => {
    const { container } = render(<Answers />)

    // @TODO: find a more efficient way to check the classes
    expect(container.innerHTML).not.toMatch(`selected`)
  })

  it('renders answers with filled currentAnswer', () => {
    const { container } = render(<Answers />, { initState: { ...initialState, currentAnswer: 'The first people to live in Canada' } })

    // @TODO: find a more efficient way to check the classes
    expect(container.innerHTML).toMatch(`selected`)
  })

  it('renders answers with selected correct currentAnswer', () => {
    const { container } = render(<Answers />, { initState: { ...initialState, currentAnswer: 'The first people to live in Canada' } })

    // @TODO: find a more efficient way to check the classes
    expect(container.innerHTML).toMatch(`selected`)
    expect(container.innerHTML).toMatch(`correct`)
  })

  it('renders answers with selected incorrect currentAnswer', () => {
    const initState = { ...initialState, currentAnswer: 'The descendents of the first Australian immigrants to Canada' }
    const { getByText, container } = render(<Answers />, { initState })

    const incorrectAnswer = getByText(initState.currentAnswer)
    expect(incorrectAnswer.innerHTML).toBe(initState.currentAnswer)

    const question = initState.questions[initState.currentQuestion]
    const correctAnswer = getByText(question.answer)
    expect(correctAnswer.innerHTML).toBe(question.answer)

    // @TODO: find a more efficient way to check the classes
    expect(container.innerHTML).toMatch(`selected`)
    expect(container.innerHTML).toMatch(`incorrect`)
  })
})