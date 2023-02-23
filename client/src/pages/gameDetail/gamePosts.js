import React, { useEffect, useState } from "react"
import "./gamePosts.css"
import axios from "axios";
import { useParams } from "react-router-dom"

const GamePosts = () => {
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setListOfPosts(response.data);
        });
    }, []);
    return (
        <div className="gamePosts">
            {listOfPosts.map((value, key) => {
                return (
                    <div className="post">
                        <div className="title"> {value.title} </div>
                        <div className="body">{value.postText}</div>
                        <div className="footer">{value.username}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default GamePosts
