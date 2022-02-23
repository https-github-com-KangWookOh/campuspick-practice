//회원가입폼
import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpBlock = styled.div`
  height: 100%;
  position: relative;
`;

const InsertForm = styled.form`
  position: absolute;
  height: 50vh;
  width: 365px;
  top: 5%;
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

const IdInput = styled.input`
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

const PwdCheckInput = styled.input`
  display: block;
  width: 350px;
  height: 44px;
  margin: 15px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
`;

const BtnWrap = styled.div`
  position: absolute;
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
  const [inputValue, setInputValue] = useState({
    nickName: "",
    id: "",
    password: "",
    pwdCheck: "",
  });
  //에러 처리
  const [pwdCheckErr, setPwdCheckErr] = useState("");
  const { nickName, id, password, pwdCheck } = inputValue; //비구조화 할당을 통해 값 추출
  //서버에 post
  const navigate = useNavigate();
  const onHandlePost = async () => {
    const postData = { nickName, id, password };
    await axios
      .post("", postData)
      .then(function (response) {
        //회원가입 성공
        console.log(response, "success");
        navigate.push("/");
      })
      .catch(function (e) {
        //회원가입 실패
        console.log(e);
        alert("회원가입에 실패하였습니다. 다시 시도하세요");
        window.location.replace("/signup");
      });
  };
  //onChange 이벤트가 발생했을 때 input값들을 저장
  const handleInput = (e) => {
    //name과 value를 추출
    const { name, value } = e.target;
    //기존의 inputValue 객체를 복사
    //name 키를 가진 값을 value로 설정
    setInputValue({ ...inputValue, [name]: value });
    setPwdCheckErr("");
  };
  const onSubmit = (e) => {
    //리프레쉬 되는 것을 방지
    e.preventDefault();
    if (password !== pwdCheck) {
      return setPwdCheckErr("비밀번호가 일치하지 않습니다");
    }
    //유효성 검사 통과하면 post 실행
    if (password === pwdCheck) {
      onHandlePost();
    }
  };
  return (
    <SignUpBlock>
      <InsertForm onSubmit={onSubmit}>
        <label style={style} htmlFor="nickname">
          닉네임
        </label>
        <NickInput
          id="nickname"
          placeholder="닉네임"
          name="nickName"
          onChange={handleInput}
        />
        <label style={style} htmlFor="id">
          아이디
        </label>
        <IdInput
          required
          id="id"
          placeholder="아이디"
          name="id"
          onChange={handleInput}
        />
        <label style={style} htmlFor="password">
          비밀번호
        </label>
        <PwdInput
          required
          type="password"
          id="password"
          placeholder="비밀번호"
          name="password"
          onChange={handleInput}
        />
        <label style={style} htmlFor="password">
          비밀번호 확인
        </label>
        <PwdCheckInput
          required
          type="password"
          id="pwdCheck"
          placeholder="비밀번호 확인"
          name="pwdCheck"
          onChange={handleInput}
        />
        {pwdCheckErr}
        <BtnWrap>
          <SignBtn type="submit">가입하기</SignBtn>
          <Link to="/">
            <BackBtn>뒤로가기</BackBtn>
          </Link>
        </BtnWrap>
      </InsertForm>
    </SignUpBlock>
  );
}

export default SignUpForm;
