import React, { useState } from "react";
import './Login.css';

function Login(props) {
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform login check here
    if (password === process.env.REACT_APP_PASSWORD) {
      props.onLoginSuccess("user123");
    }
    else{
        alert("wrong password");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
