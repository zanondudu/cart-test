import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
  margin-top: 15px;
  padding-bottom: 15px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center; 
`;

export const ProductImage = styled.img`
  width: 130px;
  height: 130px;
  border: 1px solid #c4c4c4;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding-left: 25px;
`;

export const ProductName = styled.span`
  font-size: 15px;
  font-weight: bolder;
  `;

export const Price = styled.span`
  color: #c4c4c4;
  margin-top: 10px;
  font-size: 15px;
  `;

export const NewPrice = styled.span`
  margin-top: 4px;
  font-weight: semi-bold;
`;