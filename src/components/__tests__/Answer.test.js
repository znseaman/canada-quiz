import React from 'react'
import { render } from '@testing-library/react'
import Answer from '../Answer'

const props = {
  number: 1,
  answer: '1867',
  selected: false,
  isCorrect: true,
  currentAnswer: '1867',
  correctAnswer: '1867',
  // @TODO: mock function call via jest
  handleClick: () => { }
}

describe('Answer component', () => {
  it('renders component as not selected', () => {
    const localProps = {
      ...props,
      selected: false,
      currentAnswer: ''
    }
    const { getByText, container } = render(<Answer {...localProps} />)
    const answer = getByText(localProps.answer)
    expect(answer).toBeInTheDocument()

    // @TODO: find a more efficient way to check the value
    expect(answer.innerHTML).toMatch(localProps.answer)

    // @TODO: find a more efficient way to check the classes
    expect(container.innerHTML).toMatch(/answer/)
    expect(container.innerHTML).not.toMatch(`selected`)
  })

  it('renders component as selected', () => {
    const localProps = {
      ...props,
      selected: true
    }
    const { getByText, container } = render(<Answer {...localProps} />)
    const answer = getByText(localProps.answer)
    expect(answer).toBeInTheDocument()

    // @TODO: find a more efficient way to check the value
    expect(container.innerHTML).toMatch(`value="${localProps.answer}"`)

    // @TODO: find a more efficient way to check the classes
    expect(container.innerHTML).toMatch(/answer selected/)
  })

  it('renders component as selected and correct', () => {
    const localProps = {
      ...props,
      selected: true
    }
    const { getByText, container } = render(<Answer {...localProps} />)
    const answer = getByText(localProps.answer)
    expect(answer).toBeInTheDocument()

    // @TODO: find a more efficient way to check the value
    expect(container.innerHTML).toMatch(`value="${localProps.answer}"`)

    // @TODO: find a more efficient way to check the classes
    expect(container.innerHTML).toMatch(/answer selected correct/)
  })

  it('renders component as correct but was not selected by user', () => {
    props.selected = false
    props.currentAnswer = '1812'
    const { getByText, container } = render(<Answer {...props} />)
    const answer = getByText(props.answer)
    expect(answer).toBeInTheDocument()

    // @TODO: find a more efficient way to check the value
    expect(container.innerHTML).toMatch(`value="${props.answer}"`)

    // @TODO: find a more efficient way to check the classes
    expect(container.innerHTML).toMatch(/answer not-selected correct/)
  })

  // @TODO: mock test clicking the answer
})