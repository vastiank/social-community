import React from "react";
import "../App.css";
import LoginForm from '../components/LoginForm/LoginForm'

const Login = (props) => {
  return (
    <div className="body">
      <div className="flexCenter">
        <LoginForm props={props} />
      </div>
    </div>
  );
};

export default Login;
