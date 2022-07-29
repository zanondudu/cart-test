import React, { useMemo, useState, useEffect, useRef } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { freeShippingState } from '../../store/selectors/shipping'
import * as Actions from '../../store/actions'

import Footer from '../../containers/footer'
import ProductsList from '../../containers/productsList' 

import Header from '../../components/header'
import FloatingMessage from '../../components/floatingMessage'

import { Container } from './styles'

const Cart = () => {
  const freeShipping = useSelector(freeShippingState)
  const [freeShippingOffer, setFreeShippingOffer] = useState(false)
  const dispatch = useDispatch()
  const bottomRef = useRef()
  
  const paddingBottom = useMemo(() => {
    return bottomRef.current?.clientHeight || 10;
  }, [bottomRef])
  
  useEffect(() => {
    setTimeout(() => {
      setFreeShippingOffer(true)
    }, 2000)  
  }, [])
  
  const enableFreeShippingOffer = useMemo(() => 
  {
    return freeShippingOffer && !freeShipping
  },
  [freeShipping, freeShippingOffer])
  
  return (
    <Container>
      <Header>
        Meu carrinho
      </Header>
      <ProductsList paddinBottomStyle={{ paddingBottom }} /> 
      <Footer ref={bottomRef} />
      {
        enableFreeShippingOffer && (
          <FloatingMessage handleClick={() => dispatch(Actions.enableFreeShipping())} message="Adicione mais 4 trufas e garanta seu frete grátis :)"/>
        )
      }
    </Container>
  )
}

export default Cart