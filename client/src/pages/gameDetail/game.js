import React, { useEffect, useState } from "react";
import "./game.css";
import { useParams } from "react-router-dom";

const Game = () => {
  const [currentGameDetail, setGame] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(`http://localhost:3001/games/${id}`)
        .then(res => res.json())
        .then(data => setGame(data))
  }


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
              src={currentGameDetail ? currentGameDetail.game_image : ""}
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
              {currentGameDetail ? currentGameDetail.developer : ""}
            </div>
            <div className="game__releaseDate">
              {currentGameDetail
                ? `Release date: ${currentGameDetail.release_year}-${currentGameDetail.release_month}-${currentGameDetail.release_day}`
                : ""}
            </div>
          </div>
          <div className="game__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>
              {currentGameDetail ? currentGameDetail.description : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
