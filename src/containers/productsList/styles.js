import styled from 'styled-components';

export const Container = styled.div`
  overflow: auto;
  padding: 0 2vw;
  flex: 1;
  
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #525252; 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: white; 
}
`;
