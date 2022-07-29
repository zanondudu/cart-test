import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const Spinner = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #525252;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  } 
`;

export const Message = styled.span`
  margin-top: 10px;
  font-size: 12px;
  color: #525252;
  font-weight: bold;
`;