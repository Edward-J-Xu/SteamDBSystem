import React, { useEffect, useState } from "react";
import "./gameList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";

const GameList = () => {
  const [gameList, setGameList] = useState([]);
  const { type } = useParams();

  const getData = () => {
    if (type == "all") {
      fetch(`http://localhost:3001/games/all`)
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
          console.log("data: ", data)
          setGameList(data)
        })
    } else if (type == "top_rated") {
      fetch(`http://localhost:3001/games/top_rated`)
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
          console.log("data: ", data)
          setGameList(data)
        })
    } else {
      fetch(`http://localhost:3001/games/new`)
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
          console.log("data: ", data)
          setGameList(data)
        })
    }
    
  }


  useEffect(() => {
    getData();
  }, [type]);

  return (
    <div className="game__list">
      <h2 className="list__title">{(type ? type : "ALL").toUpperCase()}</h2>
      <div className="list__cards">
        {gameList.map((game) => (
          <Cards key={game.game_id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameList;
