import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; //라우터
import { createGlobalStyle } from "styled-components";
import Begin from "./components/Begin"; //시작화면 렌더링
import LoginForm from "./components/LoginForm"; //로그인 폼
import SignUp from "./components/SignUp"; //회원가입 화면
import SignUpForm from "./components/SignUpForm"; //회원가입 폼
import FindId from "./components/FindId"; //아이디 찾기 화면
import FindIdForm from "./components/FindIdForm"; //아이디 찾기 폼
import FindPwd from "./components/FindPwd"; //비밀번호 찾기 화면
import FindPwdForm from "./components/FindPwdForm"; //비밀번호 찾기 폼

//전체 배경화면
const GlobalStyle = createGlobalStyle`
  body{
    background: #ffffff;
  }
`;

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <GlobalStyle />
//         <Begin>
//           <LoginForm />
//         </Begin>
//       </BrowserRouter>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <GlobalStyle />
      <SignUp>
        <SignUpForm />
      </SignUp>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <GlobalStyle />
//       <FindId>
//         <FindIdForm />
//       </FindId>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <GlobalStyle />
//       <FindPwd>
//         <FindPwdForm />
//       </FindPwd>
//     </div>
//   );
// }

export default App;
