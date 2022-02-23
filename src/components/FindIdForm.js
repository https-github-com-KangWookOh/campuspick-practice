//아이디찾기 폼
import React from "react";
import styled from "styled-components";

const Block = styled.div`
  position: relative;
  display: inline-block;
  width: 50%;
  height: 100%;
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
const PwdInput = styled.input`
  display: block;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.5);
  width: 250px;
  margin: 10px;
  height: 39px;
`;
const FindIdBtn = styled.button`
  display: block;
  cursor: pointer;
  border: none;
  background: #1dcdff;
  width: 250px;
  height: 39px;
  margin: 10px;
  color: white;
`;

function FindIdForm() {
  return (
    <Block>
      <InsertForm>
        <Span>아이디 찾기</Span>
        <PwdInput placeholder="*비밀번호를 입력해주세요" />
        <FindIdBtn>아이디 찾기</FindIdBtn>
      </InsertForm>
    </Block>
  );
}

export default FindIdForm;
