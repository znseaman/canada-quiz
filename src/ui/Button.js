import styled from 'styled-components'

const gold = '#4f4c4c';

const Button = styled.button`
  /* .btn */
  color: ${gold};
  background-color: #f4f4f4;
  padding: 10px 50px;
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: .5em;

  /* .btn-primary */
  color: ${gold};
  background-color: #ffc107;
  font-weight: bold;
  
  :active,
  :focus{
    outline: none;
    box-shadow: 0px 2px 50px 13px rgba(235,196,117,1);
  }

  :hover{
    box-shadow: 0px 2px 50px 13px rgba(235,196,117,1);
}
  }
`

export default Button