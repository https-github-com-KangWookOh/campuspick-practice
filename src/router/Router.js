import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, LoginPage, SignupPage } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={SignupPage} />
        <Route path="/login" element={LoginPage} />
        <Route path="/main" element={MainPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
