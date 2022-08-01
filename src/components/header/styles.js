import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding:  2vh 0;
  font-weight: bolder;
  font-size: 17px; 
  border-bottom: 1px solid #c4c4c4;
  
  @media(max-width: 599px) {
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #fff;
    /* z-index: 1; */
  }
`;
