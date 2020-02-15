import React from 'react'
import { render } from '@testing-library/react'
import Answer from '../Answer'

const props = {
  answer: '1867',
  selected: false,
  // @TODO: mock function call via jest
  handleClick: () => { }
}

describe('Answer component', () => {
  it('renders component as not selected', () => {
    props.selected = false
    const { getByText, container } = render(<Answer {...props} />)
    const answer = getByText(props.answer)
    expect(answer).toBeInTheDocument()

    // @TODO: find a more efficient way to check the value
    expect(container.innerHTML).toMatch(`value="${props.answer}"`)

    // @TODO: find a more efficient way to check the classes
    expect(container.innerHTML).toMatch(`class="answer"`)
    expect(container.innerHTML).not.toMatch(`selected`)
  })

  it('renders component as selected', () => {
    props.selected = true
    const { getByText, container } = render(<Answer {...props} />)
    const answer = getByText(props.answer)
    expect(answer).toBeInTheDocument()

    // @TODO: find a more efficient way to check the value
    expect(container.innerHTML).toMatch(`value="${props.answer}"`)

    // @TODO: find a more efficient way to check the classes
    expect(container.innerHTML).toMatch(`class="answer selected"`)
  })

  // @TODO: mock test clicking the answer
})