import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
    const [authState, setAuthState] = useState({
        username: "",
        id: 0,
        status: false,
    });

    useEffect(() => {
        axios
            .get("http://localhost:3001/auth/auth", {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
            .then((response) => {
                if (response.data.error) {
                    setAuthState({ ...authState, status: false });
                } else {
                    setAuthState({
                        username: response.data.username,
                        id: response.data.id,
                        status: true,
                    });
                }
            });
    }, []);

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ username: "", id: 0, status: false });
      };

    return (
        <div className="header">
            <AuthContext.Provider value={{ authState, setAuthState }}>
            <div className="headerLeft">
                <Link to="/">
                    <img
                        className="header_icon"
                        src="https://cdn-icons-png.flaticon.com/512/220/220223.png"
                    />
                </Link>
                {/* Milestone 1 */}
                {/* <Link
                        to="/games/popular"
                        style={{ textDecoration: "none" }}
                    >
                        <span>Popular</span>
                    </Link>
                    <Link
                        to="/games/top_rated"
                        style={{ textDecoration: "none" }}
                    >
                        <span>Top Rated</span>
                    </Link>
                    <Link
                        to="/games/upcoming"
                        style={{ textDecoration: "none" }}
                    >
                        <span>Upcoming</span>
                    </Link> */}
                <Link to="/games/posts" style={{ textDecoration: "none" }}>
                    <span>Posts</span>
                </Link>
                {!authState.status && (
                        <>
                <Link to="/login" style={{ textDecoration: "none" }}>
                    <span>Login</span>
                </Link>
                <Link to="/registration" style={{ textDecoration: "none" }}>
                    <span>Registration</span>
                </Link>
                </>
                )}
                <div className="loggedInContainer">
              <h1> Logged in: {authState.username} </h1>
              {authState.status && <button onClick={logout}> Logout</button>}
            </div>
            </div>
            </AuthContext.Provider>
        </div>
    );
};

export default Header;
