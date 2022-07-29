import React from 'react'

import { Container } from './styles'

const FloatingMessage = ({ message, handleClick }) => {
  return (
    <Container onClick={() => handleClick()}className='floating'>{ message }</Container>
  )
}

export default FloatingMessage
