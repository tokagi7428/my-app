import React, { useState, useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { UserContext } from "../../reducer/Store";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setName] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch: userDispatch } = useContext(UserContext);
  const navagate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    userDispatch({
      type: "LOGIN",
      payload: { email: email, password: password },
    });
    navagate("/");
    // console.log({ state });
  };
  return (
    <div className="login">
      <Container className="pt-5">
        <Form className="p-5 form">
          <h1 className="text-center">Login</h1>
          <Form.Group className="mb-3">
            <Form.Label>
              Email<span className="text-danger ms-1">*</span>
            </Form.Label>
            <Form.Control
              value={email}
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">
              Password<span className="text-danger ms-1">*</span>
            </Form.Label>
            <Form.Control
              value={password}
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="mt-3" onClick={submitForm}>
            Login
          </Button>
          <div className="mt-3">
            มีบัญชีผู้ใช้แล้ว ? <a href="/register">สมัครใช้งาน</a>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
