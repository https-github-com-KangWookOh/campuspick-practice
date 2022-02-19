//아이디 찾기 화면
import React from "react";
import styled from "styled-components";

const BaseBlock = styled.div`
  height: 100vh;
  background: white;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const TitleWrapper = styled.div`
  height: 15vh;
  position: relative;
  border-bottom: 1px solid #d9d5d5;
`;

const Logo = styled.div`
  background: url(/image/smallLogo.png) no-repeat;
  background-size: cover;
  position: absolulte;
  width: 90px;
  height: 90px;
  left: 19px;
  top: 17px;
`;

const Title = styled.span`
  display: inline-block;
  position: absolute;
  top: 20px;
  left: 85px;
  color: rgba(0, 0, 0, 0.51);
  font-size: 36px;
`;

const Form = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

function FindId({ children }) {
  return (
    <BaseBlock>
      <TitleWrapper>
        <Logo />
        <Title>아이디 찾기</Title>
      </TitleWrapper>
      <Form>{children}</Form>
    </BaseBlock>
  );
}
export default FindId;
