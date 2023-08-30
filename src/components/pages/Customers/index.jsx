import React from 'react'
import styled from 'styled-components'
import { Header } from '../../organisms'

const StyledButton = styled.button`
  border: none;
  background-color: blue;
  color: #fff;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  padding: 15px 32px;
  cursor: pointer;
  transition: 0.5s all ease-out;
`

export const Customers = () => {
  return (
    <div>
      <Header />
      <StyledButton>Click me</StyledButton>

    </div>
  )
}
