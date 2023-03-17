import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './components/header/Header';
import "./components/header/Header.css";
import Home from "./pages/home/home";
import GameList from "./components/gameList/gameList";
import Game from "./pages/gameDetail/game";
import PostApp from "./pages/posts/postApp";
import CreatePost from "./pages/posts/createPost";
import Post from "./pages/posts/Post";
import Login from "./pages/LoginRegister/Login";
import Registration from "./pages/LoginRegister/Registration";
import { AuthContext } from "./helpers/AuthContext";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
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
        <div className="App">
            <Router>
                {/* <Header /> */}
                <div className="header">
                    <AuthContext.Provider value={{ authState, setAuthState }}>
                        <div className="headerLeft">
                            <Link to="/">
                                <img
                                    className="header_icon"
                                    src="https://cdn-icons-png.flaticon.com/512/220/220223.png"
                                />
                            </Link>

                            {!authState.status ? (
                                <>
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
                                </>
                            ) : (
                                <>
                                    {/* Milestone 1 */}
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
                                    <Link
                                        to="/games/posts"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <span>Posts</span>
                                    </Link>
                                </>
                            )}
                            <div className="loggedInContainer">
                                <h1> Logged in: {authState.username} </h1>
                                {authState.status && (
                                    <Link
                                        to="/login"
                                        onClick={logout}
                                        style={{ textDecoration: "none" }}
                                    >
                                        {" "}
                                        <span>Logout</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </AuthContext.Provider>
                </div>
                <Routes>
                    {/* <Route index element={<Home />}></Route> */}
                    {/* Milestone 1 */}
                    <Route index element={<Login />}></Route>
                    <Route path="game/:id" element={<Game />}></Route>
                    <Route path="games/:type" element={<GameList />}></Route>
                    <Route path="games/posts" element={<PostApp />}></Route>
                    <Route path="games/posts/:id" element={<Post />}></Route>
                    <Route
                        path="games/posts/createpost"
                        element={<CreatePost />}
                    ></Route>
                    <Route path="login" element={<Login />}></Route>
                    <Route
                        path="registration"
                        element={<Registration />}
                    ></Route>
                    <Route path="/*" element={<PageNotFound />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
