import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
    const [authState, setAuthState] = useState(false);

    // useEffect(() => {
    //     axios
    //         .get("http://localhost:3001/auth/auth", {
    //             headers: {
    //                 accessToken: localStorage.getItem("accessToken"),
    //             },
    //         })
    //         .then((response) => {
    //             if (response.data.error) {
    //                 setAuthState(false);
    //             } else {
    //                 setAuthState(true);
    //             }
    //         });
    // }, []);

    return (
        <div className="header">
            {/* <AuthContext.Provider value={{ authState, setAuthState }}> */}
                <div className="headerLeft">
                    <Link to="/">
                        <img
                            className="header_icon"
                            src="https://cdn-icons-png.flaticon.com/512/220/220223.png"
                        />
                    </Link>
                    <Link
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
                    </Link>
                    <Link to="/games/posts" style={{ textDecoration: "none" }}>
                        <span>Posts</span>
                    </Link>
                    {/* {!authState && (
                        <> */}
                            <Link
                                to="/login"
                                style={{ textDecoration: "none" }}
                            >
                                <span>Login</span>
                            </Link>
                            <Link
                                to="/registration"
                                style={{ textDecoration: "none" }}
                            >
                                <span>Registration</span>
                            </Link>
                        {/* </>
                    )} */}
                </div>
            {/* </AuthContext.Provider> */}
        </div>
    );
};

export default Header;
