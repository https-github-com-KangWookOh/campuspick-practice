import React from "react";
import { createGlobalStyle } from "styled-components";
import Begin from "./components/Begin.js"; //시작화면 렌더링
import LoginForm from "./components/LoginForm.js"; //로그인 폼

//전체 배경화면
const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Begin>
        <LoginForm />
      </Begin>
    </div>
  );
}
export default App;
