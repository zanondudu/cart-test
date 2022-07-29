import React from 'react'

import { Container } from './styles'

const Button = ({handleClick, title}) => {
  return (
    <Container onClick={handleClick}>{ title }</Container>
  )
}

export default Button
