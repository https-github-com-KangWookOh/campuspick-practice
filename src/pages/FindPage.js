import React from "react";
import Find from "../components/Find.js";
import FindIdForm from "../components/FindIdForm.js";
import FindPwdForm from "../components/FindPwdForm.js";

const FindPage = () => {
  return (
    <div>
      <Find>
        <FindIdForm />
        <FindPwdForm />
      </Find>
    </div>
  );
};

export default FindPage;
