//로그인폼
import React from "react";
import styled from "styled-components";

const LoginBlock = styled.div`
  height: 100%;
  position: relative;
`;

const InsertForm = styled.form`
  background: white;
  height: 50vh;
  width: 365px;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%);
`;
const EmailInput = styled.input`
  display: block;
  width: 333px;
  height: 44px;
  margin: 15px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
`;

const PwdInput = styled.input`
  display: block;
  width: 333px;
  height: 44px;
  margin: 15px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
`;

const LoginBtn = styled.button`
  cursor: pointer;
  width: 333px;
  height: 44px;
  background: #1dcdff;
  color: white;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
  border: none;
  margin-top: 15px;
`;

const BtnWrap = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
  border: none;
  margin-top: 15px;
  width: 200px;
  height: 36px;
`;
const FindEmailBtn = styled.button`
  cursor: pointer;
  border: none;
  background: white;
  display: inline-block;
  width: 100px;
  color: rgba(0, 0, 0, 0.5);
`;

const FindPwdBtn = styled.button`
  cursor: pointer;
  border: none;
  background: white;
  display: inline-block;
  width: 100px;
  color: rgba(0, 0, 0, 0.5);
`;

const JoinBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
`;
const AskSpan = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`;

const JoinBtn = styled.button`
  color: #1dcdff;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
  border: none;
  background: white;
  margin: 10px;
`;

//만든 박스를 return
function LoginForm() {
  return (
    <LoginBlock>
      <InsertForm>
        <EmailInput placeholder="이메일" />
        <PwdInput placeholder="비밀번호" />
      </InsertForm>
      <LoginBtn>로그인</LoginBtn>
      <BtnWrap>
        <FindEmailBtn>아이디 찾기</FindEmailBtn>
        <FindPwdBtn>비밀먼호 찾기</FindPwdBtn>
      </BtnWrap>
      <JoinBlock>
        <AskSpan>아직 계정이 없으신가요?</AskSpan>
        <JoinBtn>회원가입</JoinBtn>
      </JoinBlock>
    </LoginBlock>
  );
}
export default LoginForm;
