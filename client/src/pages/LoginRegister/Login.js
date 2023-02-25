import "./LoginRegister.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let history = useNavigate();

    const login = () => {
        const data = { username: username, password: password };
        axios
            .post("http://localhost:3001/auth/login", data)
            .then((response) => {
                if (response.data.error) {
                    alert(response.data.error);
                } else {
                    sessionStorage.setItem("accessToken", response.data);
                    history("/");
                }
            });
    };
    return (
        <div className="loginContainer">
            <label>Username:</label>
            <input
                type="text"
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />

            <button onClick={login}> Login </button>
        </div>
    );
}

export default Login;
