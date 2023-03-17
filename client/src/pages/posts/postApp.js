import "./postApp.css";
import React, { useEffect, useState, useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useNavigate,
} from "react-router-dom";
import axios from "axios";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { AuthContext } from "../../helpers/AuthContext";

const PostApp = () => {
    let history = useNavigate();
    const [listOfPosts, setListOfPosts] = useState([]);
    const [likedPosts, setLikedPosts] = useState([]);
    const { authState } = useContext(AuthContext);

    useEffect(() => {
        if (! localStorage.getItem("accessToken")) {
            // history("/login");
        } else {
            axios
                .get("http://localhost:3001/posts", {
                    headers: {
                        accessToken: localStorage.getItem("accessToken"),
                    },
                })
                .then((response) => {
                    setListOfPosts(response.data.listOfPosts);
                    setLikedPosts(
                        response.data.likedPosts.map((like) => {
                            return like.PostId;
                        })
                    );
                });
        }
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
                        if (post.Likes[0].id == null) {
                            console.log(post.Likes.length);
                            post.Likes.pop();
                            console.log(post.Likes.length);
                        }
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
                if (likedPosts.includes(postId)) {
                    setLikedPosts(
                        likedPosts.filter((id) => {
                            return id != postId;
                        })
                    );
                } else {
                    setLikedPosts([...likedPosts, postId]);
                }
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
                            <div className="username">{value.username}</div>
                            <div className="buttons">
                                <ThumbUpAltIcon
                                    onClick={() => {
                                        likeAPost(value.id);
                                    }}
                                    className={
                                        likedPosts.includes(value.id)
                                            ? "unlikeBttn"
                                            : "likeBttn"
                                    }
                                />
                                {/* {console.log("Liked[0]: ", value.Likes[0].id)} */}
                                <label>{value.Likes.length}</label>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PostApp;
