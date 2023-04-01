import React, { useEffect, useState } from "react";
import "./game.css";
import { useParams, useNavigate } from "react-router-dom";
import "../posts/postApp.css";
import axios from "axios";

const Game = () => {
    const [currentGameDetail, setGame] = useState();
    const { id } = useParams();
    const [listOfPosts, setListOfPosts] = useState([]);
    let history = useNavigate();

    useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    }, []);

    const getData = () => {
        fetch(`http://localhost:3001/games/${id}`)
            .then((res) => res.json())
            .then((data) => setGame(data));
    };

    useEffect(() => {
        axios
            .get(`http://localhost:3001/posts/bygameId/${id}`)
            .then((response) => {
                setListOfPosts(response.data.listOfPosts);
            });
    }, []);

    return (
        <div className="game">
            <div className="game__intro">
                <img
                    className="game__backdrop"
                    src={currentGameDetail ? currentGameDetail.game_image : ""}
                />
            </div>
            <div className="game__detail">
                <div className="game__detailLeft">
                    <div className="game__posterBox">
                        <img
                            className="game__poster"
                            src={
                                currentGameDetail
                                    ? currentGameDetail.game_image
                                    : ""
                            }
                        />
                    </div>
                </div>
                <div className="game__detailRight">
                    <div className="game__detailRightTop">
                        <div className="game__name">
                            {currentGameDetail ? currentGameDetail.name : ""}
                        </div>
                        <div className="game__genre">
                            {currentGameDetail ? currentGameDetail.genre : ""}
                        </div>
                        <div className="game__rating">
                            {currentGameDetail ? currentGameDetail.rating : ""}
                            <i className="fas fa-star" />
                        </div>
                        <div className="game__developer">
                            {currentGameDetail
                                ? currentGameDetail.developer
                                : ""}
                        </div>
                        <div className="game__releaseDate">
                            {currentGameDetail
                                ? `Release date: ${currentGameDetail.release_year}-${currentGameDetail.release_month}-${currentGameDetail.release_day}`
                                : ""}
                        </div>
                    </div>
                    <div className="game__detailRightBottom">
                        <div className="synopsisText">Description</div>
                        <div>
                            {/* {currentGameDetail
                                ? currentGameDetail.description
                                : ""} */}
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: currentGameDetail
                                        ? currentGameDetail.description
                                        : "",
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="post__listContainer">
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
                                        <div className="username">
                                            {value.username}
                                        </div>
                                        <div className="buttons">
                                            <label> {value.like_count}</label>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
