import React, { useEffect, useState } from "react";
import "./gameList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";
import Papa from "papaparse";
import gameDataCSV from "../../database/gamedb.csv";

const GameList = () => {
  const [gameList, setGameList] = useState([]);
  const { type } = useParams();

  const getData = () => {
    Papa.parse(gameDataCSV, {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: (results) => {
        let data = results.data;
        if (type) {
          if (type.toLowerCase() === "popular" || type.toLowerCase() === "top_rated") {
            data.sort((a, b) => b.rating - a.rating);
            data = data.slice(0, 50); // Show top 50 games
          } else {
            data = data.filter((game) => game.genre.toLowerCase() === type.toLowerCase());
          }
        }
        setGameList(data);
      },
    });
  };

  const getData2 = () => {
    fetch(`http://localhost:3001/games`)
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
          console.log("data: ", data)
          setGameList(data)
        })
  }


  useEffect(() => {
    getData2();
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
