import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ForgotPassword,
  InlineError,
  LoginButton,
  LoginForm,
  Password,
  Username
} from "./styled.components";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" }); // Error state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    let newErrors = { username: "", password: "" };

    if (!username) {
      newErrors.username = "Username is required";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      if (username === "admin" && password === "password") {
        dispatch(login({ username, authToken: "fake-token" }));
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <h3 style={{ color: "#8C55AA" }}> Sign In</h3>
        <div>
          <Username
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          {errors.username && <InlineError>{errors.username}</InlineError>}
        </div>
        <div>
          <Password
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {errors.password && <InlineError>{errors.password}</InlineError>}
        </div>
        <LoginButton type="submit">Login</LoginButton>
        <ForgotPassword href="/#"> Forgot Password ?</ForgotPassword>
      </LoginForm>
    </Container>
  );
};

export default Login;
