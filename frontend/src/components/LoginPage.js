import React from "react";
//import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import LoginForm from "./LoginForm";

function LoginPage() {
  // const navigate = useNavigate();
  // const Loginhandler = () => {
  //   navigate("/home");
  // };
  return (
    <div className="login-page">
      
      <img  className="Image" 
        alt=""
        src="https://t4.ftcdn.net/jpg/04/48/46/75/360_F_448467517_QXFZY8nA41dSbvaJzCIfItRzk0Wmv5n6.jpg"
      />
      
      <div className="Loginpage">
        <h1 className="LoginHeading">Finance Manager</h1>
        <h2 className="LoginHeading" style={{ fontSize: "2rem" }}>
          Start Monitoring
        </h2>
        <p className="LoginText">
          Sign up today to organise your finances, Create group budgets and much
          more...
        </p>
        <div className="btn-ele">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
