//헤더
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderBlock = styled.div`
  background: #1dcdff;
  height: 15vh;
  position: relative;
`;

const Logo = styled.div`
  background: url(/image/logo.png) no-repeat;
  background-size: cover;
  width: 166px;
  height: 63px;
  position: absolute;
  top: 15px;
  left: 20px;
`;

const BtnWrap = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
`;
const LoginBtn = styled.button`
  cursor: pointer;
  border: white solid 1px;
  border-radius: 3px;
  background: #1dcdff;
  display: inline-block;
  width: 100px;
  height: 39px;
  margin: 10px;
  color: white;
`;
const SignBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 3px;
  background: #ff7c1d;
  display: inline-block;
  width: 100px;
  height: 39px;
  margin: 10px;
  color: white;
`;

function Header() {
  return (
    <HeaderBlock>
      <Logo />
      <BtnWrap>
        <Link to="/login">
          <LoginBtn>로그인</LoginBtn>
        </Link>
        <Link to="/signup">
          <SignBtn>회원가입</SignBtn>
        </Link>
      </BtnWrap>
    </HeaderBlock>
  );
}

export default Header;
