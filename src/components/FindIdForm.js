//아이디찾기 폼
import React from "react";
import styled from "styled-components";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const handleInput = (e) => {
    e.preventDefault();
    const obj = { pwd: e.target.value };
    axios("", {
      method: "POST",
      data: obj,
      headers: new Headers(),
    })
      .then(function (response) {
        //비밀번호에 해당하는 아이디 존재함
        console.log(response, "아이디 존재함");
        alert(`아이디는 ${response.data}입니다.`);
        navigate.push("/signup");
      })
      .catch(function (e) {
        console.log(e);
        alert(
          "비밀번호에 해당하는 아이디가 존재하지 않습니다. 다시 입력해주세요."
        );
        window.location.replace("/FindPage");
      });
  };
  return (
    <Block>
      <InsertForm onSubmit={handleInput}>
        <Span>아이디 찾기</Span>
        <PwdInput
          required
          type="password"
          placeholder="*비밀번호를 입력해주세요"
        />
        <FindIdBtn type="submit">아이디 찾기</FindIdBtn>
      </InsertForm>
    </Block>
  );
}

export default FindIdForm;
