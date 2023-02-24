import "./postApp.css";
import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PostApp = () => {
    let history = useNavigate();
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setListOfPosts(response.data);
        });
    }, []);   

    return (
        <div className="PostApp">
            <div className="navbar">
                <Link to="/games/posts/createpost" style={{ textDecoration: "none" }}><span>Create A Post</span></Link>
                <Link to="/games/posts" style={{ textDecoration: "none" }}><span>Posts Home Page</span></Link>
            </div>
            {listOfPosts.map((value, key) => {
                function handleClick() {
                    history(`/games/posts/${value.id}`)
                }
                return (
                    <div
                        key={key}
                        className="post"
                        // onClick={() => {
                        //     history.push(`/games/posts/${value.id}`);
                        //     history(`/games/posts/${value.id}`)
                        // }}
                        onClick={handleClick}
                    >
                        <div className="title"> {value.title} </div>
                        <div className="body">{value.postText}</div>
                        <div className="footer">{value.username}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default PostApp;