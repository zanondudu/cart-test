import React, { useMemo } from 'react'

import { useSelector } from 'react-redux'
import { totalAmountState } from '../../store/selectors/amount'

import currencyFormat from '../../utils/currencyFormat'

import Button from '../../components/button'

import { 
  Container,
  ButtonContainer,
  AmountContainer,
  TextWrapper,
  FreeShippingTag
} from './styles'

const Footer = () => {
  const { totalAmount } = useSelector(totalAmountState)
  
  const freeShipping = useMemo(() => totalAmount > 1000, [totalAmount])
  
  return (
    <Container>
      <AmountContainer>
        <TextWrapper>
          <span>
            Total:
          </span>
          <span>
            {currencyFormat(totalAmount) }
          </span>
        </TextWrapper>
        {
          freeShipping && (
            <FreeShippingTag>
              <span>
                Parabéns, sua compra tem frete grátis!
              </span>
            </FreeShippingTag>
          )
        }
      </AmountContainer>
      <ButtonContainer>
        <Button handleClick={() => alert(':)')} title="Finalizar compra" />
      </ButtonContainer>
    </Container>
  )
}

export default Footer