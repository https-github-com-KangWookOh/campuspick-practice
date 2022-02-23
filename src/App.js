import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/signup" element={<SignupPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/main" element={<MainPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
