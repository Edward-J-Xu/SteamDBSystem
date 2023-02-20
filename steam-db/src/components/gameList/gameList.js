import React, {useEffect, useState} from "react"
import "./gameList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const GameList = () => {
    
    const [gameList, setGameList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setGameList(data.results))
    }

    return (
        <div className="game__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    gameList.map(game => (
                        <Cards game={game} />
                    ))
                }
            </div>
        </div>
    )
}

export default GameList
