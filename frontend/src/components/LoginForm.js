import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function LoginForm() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPass, setEnteredPass] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEmail = (event) => {
    setEnteredEmail(event.target.value);
  };
  const handlePass = (event) => {
    setEnteredPass(event.target.value);
  };

  const handleLogin = () => {
    if (enteredEmail.trim().length === 0 || enteredPass.trim().length < 8) {
      return;
    }
    navigate("/home");
  };

  return (
    <>
      <button onClick={handleShow} className="loginbtn">
        Login/Signup
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h5>Enter username and password</h5>
        </Modal.Header>
        <div style={{ marginTop: "1rem" }}>
          <input
            onChange={handleEmail}
            type="text"
            placeholder="Username"
            style={{ width: "60%", marginLeft: "1rem" }}
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <input
            onChange={handlePass}
            type="text"
            placeholder="Password"
            style={{ width: "60%", marginLeft: "1rem" }}
          />
        </div>
        <Modal.Footer>
          <button
            style={{
              borderRadius: "0.4rem",
              color: "aliceblue",
              fontWeight: "bold",
              backgroundColor: "grey",
              border: "0rem",
              height: "2.5rem",
            }}
            onClick={handleClose}
          >
            Close
          </button>
          <button
            style={{
              borderRadius: "0.4rem",
              color: "aliceblue",
              fontWeight: "bold",
              backgroundColor: "darkblue",
              border: "0rem",
              height: "2.5rem",
            }}
            onClick={handleLogin}
          >
            Login
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginForm;
