import React from "react";
import { createGlobalStyle } from "styled-components";
import Begin from "./components/Begin.js"; //����ȭ�� ������
import LoginForm from "./components/LoginForm.js"; //�α��� ��

//��ü ���ȭ��
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
