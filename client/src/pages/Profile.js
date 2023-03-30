import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../components/gameList/gameList.css";
import Cards from "../components/card/card";

function Profile() {
    let { id } = useParams();
    let history = useNavigate();
    const [username, setUsername] = useState("");
    const [listOfPosts, setListOfPosts] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [selectedSection, setSelectedSection] = useState("posts");
    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3001/auth/basicinfo/${id}`)
            .then((response) => {
                setUsername(response.data[0][0].username);
            });

        axios
            .get(`http://localhost:3001/posts/byuserId/${id}`)
            .then((response) => {
                setListOfPosts(response.data.listOfPosts);
                setUserInfo(response.data.userInfo);
            });
    }, []);

    useEffect(() => {
          fetch(`http://localhost:3001/games/byuserId/${id}`)
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => {
              console.log("all games: ", data)
              setGameList(data)
            })
        }, []);

    return (
        <div className="profilePageContainer">
            <div className="basicInfo">
                {" "}
                <h1> Username: {userInfo[0] && userInfo[0].username} </h1>
                <h2>
                    {" "}
                    Number of Posts: {userInfo[0] &&
                        userInfo[0].post_count}{" "}
                </h2>
                <h2>
                    {" "}
                    Number of Games: {gameList &&
                        gameList.length}{" "}
                </h2>
                <div>Region: {userInfo[0] && userInfo[0].region}</div>
                <div>Age: {userInfo[0] && userInfo[0].age}</div>
                <div>Language: {userInfo[0] && userInfo[0].language}</div>
                <div>Platform: {userInfo[0] && userInfo[0].platform}</div>
            </div>
            <div className="sectionButtons">
                <button onClick={() => setSelectedSection("posts")}>
                    List of Posts
                </button>
                <button onClick={() => setSelectedSection("games")}>
                    Owned Games
                </button>
            </div>
            <div
                className={
                    selectedSection === "posts" ? "listOfPosts" : "hidden"
                }
            >
                {listOfPosts.map((value, key) => {
                    return (
                        <div key={key} className="post">
                            <div className="title"> {value.title} </div>
                            <div
                                className="body"
                                onClick={() => {
                                    history(`/post/${value.id}`);
                                }}
                            >
                                {value.postText}
                            </div>
                            <div className="footer">
                                <div className="username">{value.username}</div>
                                <div className="buttons">
                                    <label> {value.likeCount}</label>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div
                className={
                    selectedSection === "games" ? "list__cards" : "hidden"
                }
            >
                {gameList.map((game) => (
                    <Cards key={game.game_id} game={game} />
                ))}
            </div>
        </div>
    );
}

export default Profile;
