import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 599px) { 
    position: fixed;
    bottom: 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FreeShippingTag = styled.div`
  color: #377a0c;
  background-color: #c3eea5;
  border-radius: 50px;
  padding: 1vh 0;
  font-weight: normal;
  margin-top: 10px;
`;

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2vh 4vw;
  border-top: 1px solid #c4c4c4;
  font-size: 17px;
  font-weight: bolder;
`;

export const ButtonContainer = styled.div`
  padding: 2vh 4vw;
  border-top: 1px solid #c4c4c4;
`;
