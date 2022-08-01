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
  const topRef = useRef()
  const [paddingBottom, setPaddingBottom] = useState(209);
  const [paddingTop, setPaddingTop] = useState(70);

  useEffect(() => {
    setTimeout(() => {
      setPaddingBottom(bottomRef.current?.clientHeight)
      setPaddingTop(topRef.current?.clientHeight)
    }, 500);
  }, [freeShipping, bottomRef, topRef])
  
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
      <Header ref={topRef}>
        Meu carrinho
      </Header>
      <ProductsList 
        paddinBottomStyle={paddingBottom}
        paddingTopStyle={paddingTop}
      /> 
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