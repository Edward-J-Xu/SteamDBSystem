import "./postApp.css";
import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useNavigate,
} from "react-router-dom";
import axios from "axios";

const PostApp = () => {
    let history = useNavigate();
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setListOfPosts(response.data);
        });
    }, []);

    const likeAPost = (postId) => {
        axios
            .post(
                "http://localhost:3001/likes",
                { PostId: postId },
                {
                    headers: {
                        accessToken: localStorage.getItem("accessToken"),
                    },
                }
            )
            .then((response) => {
                setListOfPosts(
                    listOfPosts.map((post) => {
                        // while (post.Likes.length != 0 && post.Likes[0].id == null) {
                        //     post.Likes.pop();
                        // }
                        if (post.id === postId) {
                            if (response.data.liked) {
                                return { ...post, Likes: [...post.Likes, 0] };
                            } else {
                                const likesArray = post.Likes;
                                likesArray.pop();
                                return { ...post, Likes: likesArray };
                            }
                        } else {
                            return post;
                        }
                    })
                );
            });
    };

    return (
        <div className="PostApp">
            <div className="navbar">
                <Link
                    to="/games/posts/createpost"
                    style={{ textDecoration: "none" }}
                >
                    <span>Create A Post</span>
                </Link>
                <Link to="/games/posts" style={{ textDecoration: "none" }}>
                    <span>Posts Home Page</span>
                </Link>
            </div>
            {listOfPosts.map((value, key) => {
                function handleClick() {
                    history(`/games/posts/${value.id}`);
                }
                return (
                    <div key={key} className="post">
                        <div className="title"> {value.title} </div>
                        <div className="body" onClick={handleClick}>
                            {value.postText}
                        </div>
                        <div className="footer">
                            {value.username}{" "}
                            <button
                                onClick={() => {
                                    likeAPost(value.id);
                                }}
                            >
                                {" "}
                                Like
                            </button>
                            {/* {console.log("Liked[0]: ", value.Likes[0].id)} */}
                            <label> 
                                {value.Likes.length}
                            </label>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PostApp;
