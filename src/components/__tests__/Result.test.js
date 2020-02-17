import React from 'react'
import { render } from '@testing-library/react'
import Result from '../Result'

describe('Result component', () => {
  it('renders without error', () => {
    const props = {
      question: {
        "id": 1,
        "question": "Who are the Aboriginal peoples of Canada?",
        "options": [
          "The first European settlers to arrive in Canada",
          "The descendents of the first Australian immigrants to Canada",
          "The first people to live in Canada",
          "The first settlers of Newfoundland"
        ],
        "answer": "The first people to live in Canada"
      },
      answer: {
        "id": 1,
        "answer": "The first people to live in Canada"
      }
    }

    const { getByTestId } = render(<Result {...props} />)
    const question = getByTestId('given-question')
    expect(question.innerHTML).toBe(props.question.question)
    const answer = getByTestId('given-answer')
    expect(answer.innerHTML).toMatch(/correct/i)
  });
})