import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 15px;
  height: 90%;
  
  @media (max-width: 599px) { 
    width: 100%;
    height: 100%;
  }
  
  @media (min-width: 600px) {
    width: 80%;
  }
  
  @media (min-width: 900px) { 
    width: 40%;
  }
  
  @media (min-width: 1800px) { 
    width: 30%;
  }
`;
