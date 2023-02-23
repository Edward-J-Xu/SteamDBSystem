import "./postApp.css";
import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";

const PostApp = () => {
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setListOfPosts(response.data);
        });
    }, []);
    return (
        <div className="PostApp">
            <Link to="/games/posts/createpost" style={{textDecoration: "none"}}><span>Create A Post</span></Link>
            <Link to="/games/posts" style={{textDecoration: "none"}}><span>Posts Home Page</span></Link>
            {listOfPosts.map((value, key) => {
                return (
                    <div className="post">
                        <div className="title"> {value.title} </div>
                        <div className="body">{value.postText}</div>
                        <div className="footer">{value.username}</div>
                    </div>
                    // <div className="/games/posts/post">
                    //     <div className="title"> {value.title} </div>
                    //     <div className="body">{value.postText}</div>
                    //     <div className="footer">{value.username}</div>
                    // </div>
                );
            })}
        </div>
    );
}

export default PostApp;