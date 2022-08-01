import React, {useEffect, useState, useCallback} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../../store/actions'
import { freeShippingState } from '../../store/selectors/shipping'

import api from '../../services/api'

import ProductCard from '../../components/productCard'

import { Container } from './styles'

const ProductsList = ({paddinBottomStyle}) => {
  const [productsData, setProductsData] = useState([])
  const freeShipping = useSelector(freeShippingState)
  const dispatch = useDispatch()
  
  useEffect(() => {
    getProductsData('/no-free-shipping')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const getProductsData = useCallback(async (endPoint) => {
    dispatch(Actions.enableLoader('Adicionando itens ao carrinho'))
    const { data } = await api.get(endPoint)
    const { items, totalizers } = data

    setProductsData(items)
    dispatch(Actions.updateTotalAmount(totalizers[0].value))
    dispatch(Actions.disableLoader())
  }, [dispatch])
  
  useEffect(() => {
    if (freeShipping) {
      getProductsData('/free-shipping')
    }
  }, [freeShipping, getProductsData])
  
  return (
    <Container style={{ paddingBottom: `${paddinBottomStyle}px`}}>
      {
        productsData.map(item => (
          <ProductCard
            key={item.id}
            imgUrl={item.imageUrl}
            fullPrice={item.price}
            newPrice={item.sellingPrice}
            productName={item.name}
          />
        ))
      }
    </Container>
  )
}

export default ProductsList