import React from 'react'

import currencyFormat from '../../utils/currencyFormat'

import { 
  Container, 
  ImageWrapper, 
  ProductImage,
  ProductInfoWrapper,
  ProductName,
  Price,
  NewPrice
} from './styles'

const ProductCard = ({imgUrl, productName, fullPrice, newPrice}) => {
  return (
    <Container>
      <ImageWrapper>
        <ProductImage src={imgUrl} />
      </ImageWrapper>
      <ProductInfoWrapper>
        <ProductName>
          {productName}
        </ProductName>
        <Price>
          {currencyFormat(fullPrice)}
        </Price>
        <NewPrice>
          {currencyFormat(newPrice)}
        </NewPrice>
      </ProductInfoWrapper>
    </Container>
  )
}

export default ProductCard