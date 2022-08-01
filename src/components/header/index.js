import React from 'react'

import { Container } from './styles'

const Header = React.forwardRef(({children}, ref) => {
  return (
    <Container ref={ref}>
      {children}
    </Container>
  )
});

export default Header
