import React from "react";
import "../App.css";
import LoginForm from '../components/LoginForm/LoginForm'

const Login = () => {
  return (
    <div className="body">
      <div className="flexCenter">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
