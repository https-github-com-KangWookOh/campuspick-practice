//사이트에 접속했을 때 나타나는 첫번째 화면
import React from "react";
import styled from "styled-components";

const BaseBlock = styled.div`
  height: 100vh;
  background: white;
`;

const LogoWrapper = styled.div`
  background: #1dcdff;
  height: 30vh;
  position: relative;
`;

const Logo = styled.div`
  background: url(/image/logo.png) no-repeat;
  width: 245px;
  height: 95px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Form = styled.div`
  justify-content: center;
  align-items: center;
`;

//만든 박스를 return
function Begin({ children }) {
  return (
    <BaseBlock>
      <LogoWrapper>
        <Logo></Logo>
      </LogoWrapper>
      <Form>{children}</Form>
    </BaseBlock>
  );
}
export default Begin;
