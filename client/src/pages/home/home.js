import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import GameList from "../../components/gameList/gameList";

const Home = () => {

    const [ popularGames, setPopularGames ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularGames(data.results))
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularGames.map(game => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/game/${game.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${game && game.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{game ? game.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {game ? game.release_date : ""}
                                        <span className="posterImage__rating">
                                            {game ? game.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{game ? game.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <GameList />
            </div>
        </>
    )
}

export default Home
