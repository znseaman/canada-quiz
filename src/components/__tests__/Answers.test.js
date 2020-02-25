import React from 'react'
import { render, fireEvent } from '../../tests/test-utils'
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

  it('renders answers with selected correct currentAnswer', () => {
    const question = initialState.questions[0]
    const givenAnswer = question.answer
    const { getByText, rerender } = render(<Answers />)

    const currentAnswer = getByText(givenAnswer)
    fireEvent.click(currentAnswer)

    rerender(<Answers />)

    expect(currentAnswer.textContent).toBe(givenAnswer)
    expect(Array.from(currentAnswer.classList)).toContain('answer')
    expect(Array.from(currentAnswer.classList)).toContain('selected')
    expect(Array.from(currentAnswer.classList)).toContain('correct')
  })

  it('renders answers with selected incorrect currentAnswer', () => {
    const question = initialState.questions[0]
    const { answer } = question
    const givenAnswer = question.options.find(opt => opt != answer)
    const { getByText, rerender, container } = render(<Answers />)

    const currentAnswer = getByText(givenAnswer)
    fireEvent.click(currentAnswer)

    rerender(<Answers />)

    expect(currentAnswer.textContent).toBe(givenAnswer)
    expect(Array.from(currentAnswer.classList)).toContain('answer')
    expect(Array.from(currentAnswer.classList)).toContain('selected')
    expect(Array.from(currentAnswer.classList)).toContain('incorrect')

    const correctAnswer = getByText(answer)
    expect(correctAnswer.textContent).toBe(answer)
    expect(Array.from(correctAnswer.classList)).toContain('answer')
    expect(Array.from(correctAnswer.classList)).toContain('not-selected')
    expect(Array.from(correctAnswer.classList)).toContain('correct')
  })
})