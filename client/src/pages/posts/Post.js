import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../helpers/AuthContext";
import "./Post.css";

function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    // const { authState, setAuthState} = useContext(AuthContext);
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

    useEffect(() => {
        // Get Posts
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
        });

        // Get Comments
        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
            setComments(response.data);
        });
    }, []);

    const addComment = () => {
        axios
            .post(
                "http://localhost:3001/comments",
                {
                    comment_body: newComment,
                    postId: id,
                },
                {
                    headers: {
                        accessToken: localStorage.getItem("accessToken"),
                    },
                }
            )
            .then((response) => {
                if (response.data.error) {
                    console.log(response.data.error);
                } else {
                    const commentToAdd = {
                        comment_body: newComment,
                        username: response.data.username,
                    };
                    setComments([...comments, commentToAdd]);
                    setNewComment("");
                }
            });
    };

    const deleteComment = (id) => {
        axios
            .delete(`http://localhost:3001/comments/${id}`, {
                headers: { accessToken: localStorage.getItem("accessToken") },
            })
            .then(() => {
                setComments(
                    comments.filter((val) => {
                        return val.id != id;
                    })
                );
            });
    };

    return (
        <div className="postPage">
            <div className="navbar1">
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
            <div className="leftSide">
                <div className="post" id="individual">
                    <div className="title"> {postObject.title} </div>
                    <div className="body">{postObject.postText}</div>
                    <div className="footer">{postObject.username}</div>
                </div>
            </div>
            <div className="rightSide">
                <div className="addCommentContainer">
                    <input
                        type="text"
                        placeholder="Comment..."
                        autoComplete="off"
                        value={newComment}
                        onChange={(event) => {
                            setNewComment(event.target.value);
                        }}
                    />
                    <button onClick={addComment}> Add Comment</button>
                </div>
                <div className="listOfComments">
                    {comments.map((comment, key) => {
                        return (
                            <div key={key} className="comment">
                                {comment.comment_body}
                                <label> Username: {comment.username}</label>
                                {/* <AuthContext.Provider value={{ authState, setAuthState }}> */}
                                    {/* {console.log("Auth User: ", authState.username)} */}
                                {/* <h1> Logged in: {authState.username} </h1> */}
                                {authState.username === comment.username && (
                                    <button
                                        onClick={() => {
                                            deleteComment(comment.id);
                                        }}
                                    >
                                        X
                                    </button>
                                )}
                                {/* </AuthContext.Provider> */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Post;
