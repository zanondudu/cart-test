import React from 'react'

import { useSelector } from 'react-redux'
import { isLoadingState, loadingMessageState } from '../../store/selectors/loader'

import {
  Container,
  Spinner,
  Message
} from './styles'

const Loader = () => {
  const isLoading = useSelector(isLoadingState)
  const loadinMessage = useSelector(loadingMessageState)

  return isLoading ? (
    <Container>
      <Spinner />
      <Message>
        {loadinMessage}
      </Message>
    </Container>
  ) : (<></>)
}

export default Loader