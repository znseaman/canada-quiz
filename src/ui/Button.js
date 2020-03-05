import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  /* .btn */
  color: ${props => props.primary};
  background-color: transparent;
  padding: 10px 50px;
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: .5em;

  /* .btn-primary */
  color: ${props => props.primary};
  border: 4px solid ${props => props.secondary};
  font-weight: bold;
  
  :active,
  :focus{
    outline: none;
    box-shadow: ${props => `0px 2px 13px 3px ${props.halo}`};
  }

  :hover{
    box-shadow: ${props => `0px 2px 13px 3px ${props.halo}`};
  }
`

const ForwardRef = React.forwardRef((props, ref) => {
  return <Button ref={ref} {...props}></Button>
})

export default ForwardRef