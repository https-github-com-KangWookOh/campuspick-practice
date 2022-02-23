//첫화면
import React from "react";
import styled from "styled-components";

const MainBlock = styled.div`
  height: 100vh;
  background: white;
`;

const DataBlock = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

//만든 박스를 return
function Main({ children }) {
  return (
    <MainBlock>
      {children}
      <DataBlock />
    </MainBlock>
  );
}
export default Main;
