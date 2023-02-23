import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Post.css";

function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
        });
    });
    return (
        <div className="postPage">
            <div className="navbar1">
                <Link to="/games/posts/createpost" style={{ textDecoration: "none" }}><span>Create A Post</span></Link>
                <Link to="/games/posts" style={{ textDecoration: "none" }}><span>Posts Home Page</span></Link>
            </div>
            <div className="leftSide">
                <div className="post" id="individual">
                    <div className="title"> {postObject.title} </div>
                    <div className="body">{postObject.postText}</div>
                    <div className="footer">{postObject.username}</div>
                </div>
            </div>
            <div className="rightSide">Comment Section</div>
        </div>
    );
}

export default Post;
