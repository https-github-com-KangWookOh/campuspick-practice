//비밀번호찾기 폼
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Block = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;
  height: 100%;
  position: relative;
`;

const InsertForm = styled.form`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Span = styled.span`
  display: block;
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-weight: normal;
  font-size: 20px;
`;
const IdInput = styled.input`
  display: block;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.5);
  width: 250px;
  margin: 10px;
  height: 39px;
`;
const FindPwdBtn = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  background: #1dcdff;
  width: 250px;
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
  position: absolute;
  top: 75%;
  right: 5%;
`;

function FindPwdForm() {
  return (
    <Block>
      <InsertForm>
        <Span>비밀번호 찾기</Span>
        <IdInput placeholder="*아이디를 입력해주세요" />
        <FindPwdBtn>비밀번호 찾기</FindPwdBtn>
      </InsertForm>
      <Link to="/login">
        <BackBtn>뒤로가기</BackBtn>
      </Link>
    </Block>
  );
}

export default FindPwdForm;
