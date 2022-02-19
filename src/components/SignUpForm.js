//회원가입폼
import React from "react";
import styled from "styled-components";

const SignUpBlock = styled.div`
  height: 100%;
  position: relative;
`;

const InsertForm = styled.form`
  position: absolute;
  height: 50vh;
  width: 365px;
  top: 10%;
  left: 50%;
  transform: translate(-50%);
`;

const NickInput = styled.input`
  display: block;
  width: 350px;
  height: 44px;
  margin: 15px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
`;

const EmailInput = styled.input`
  display: block;
  width: 350px;
  height: 44px;
  margin: 15px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
`;

const PwdInput = styled.input`
  display: block;
  width: 350px;
  height: 44px;
  margin: 15px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
`;

const BtnWrap = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%);
  border: none;
  margin-top: 15px;
  width: 240px;
  height: 60px;
`;

const SignBtn = styled.button`
  cursor: pointer;
  border: none;
  background: #1dcdff;
  display: inline-block;
  width: 100px;
  height: 39px;
  margin: 10px;
  color: white;
`;

const BackBtn = styled.button`
  cursor: pointer;
  border: none;
  background: #ff7c1d;
  display: inline-block;
  width: 100px;
  height: 39px;
  margin: 10px;
  color: white;
`;
const style = {
  padding: "9px",
  color: "rgba(0, 0, 0, 0.51)",
};
function SignUpForm() {
  return (
    <SignUpBlock>
      <InsertForm>
        <label style={style} htmlFor="nickname">
          닉네임
        </label>
        <NickInput id="nickname" placeholder="닉네임" />
        <label style={style} htmlFor="email">
          이메일
        </label>
        <EmailInput id="email" placeholder="이메일" />
        <label style={style} htmlFor="password">
          비밀번호
        </label>
        <PwdInput id="password" placeholder="비밀번호" />
      </InsertForm>
      <BtnWrap>
        <SignBtn>가입하기</SignBtn>
        <BackBtn>뒤로가기</BackBtn>
      </BtnWrap>
    </SignUpBlock>
  );
}

export default SignUpForm;
