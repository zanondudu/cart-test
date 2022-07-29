import styled from 'styled-components';

export const Container = styled.div`
  color: #377a0c;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #c3eea5;
  border-radius: 20px;
  padding: 1vh 1vw;
  font-weight: bolder;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  box-shadow: 0 5px 15px 0px;
  animation: float 1.5s infinite;
  transition: ease 0.5s;
  cursor: pointer;  

  @keyframes float {
    0%{transform: translateY(-10%);transition: ease 0.5s;}
    50%{transform: translateY(10%);transition: ease 0.5s;}
  }
`;
