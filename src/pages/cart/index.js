import React, { useMemo, useState, useEffect } from 'react'

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
      
      <ProductsList /> 
      <Footer />
      {
        enableFreeShippingOffer && (
          <FloatingMessage handleClick={() => dispatch(Actions.enableFreeShipping())} message="Adicione mais 4 trufas e garanta seu frete grátis :)"/>
        )
      }
    </Container>
  )
}

export default Cart