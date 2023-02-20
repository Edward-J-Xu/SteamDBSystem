import React, {useEffect, useState} from "react"
import "./game.css"
import { useParams } from "react-router-dom"

const Game = () => {
    const [currentGameDetail, setGame] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setGame(data))
    }

    return (
        <div className="game">
            <div className="game__intro">
                <img className="game__backdrop" src={`https://image.tmdb.org/t/p/original${currentGameDetail ? currentGameDetail.backdrop_path : ""}`} />
            </div>
            <div className="game__detail">
                <div className="game__detailLeft">
                    <div className="game__posterBox">
                        <img className="game__poster" src={`https://image.tmdb.org/t/p/original${currentGameDetail ? currentGameDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="game__detailRight">
                    <div className="game__detailRightTop">
                        <div className="game__name">{currentGameDetail ? currentGameDetail.original_title : ""}</div>
                        <div className="game__tagline">{currentGameDetail ? currentGameDetail.tagline : ""}</div>
                        <div className="game__rating">
                            {currentGameDetail ? currentGameDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="game__voteCount">{currentGameDetail ? "(" + currentGameDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="game__runtime">{currentGameDetail ? currentGameDetail.runtime + " mins" : ""}</div>
                        <div className="game__releaseDate">{currentGameDetail ? "Release date: " + currentGameDetail.release_date : ""}</div>
                        <div className="game__genres">
                            {
                                currentGameDetail && currentGameDetail.genres
                                ? 
                                currentGameDetail.genres.map(genre => (
                                    <><span className="game__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="game__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentGameDetail ? currentGameDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="game__links">
                <div className="game__heading">Useful Links</div>
                {
                    currentGameDetail && currentGameDetail.homepage && <a href={currentGameDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="game__homeButton game__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentGameDetail && currentGameDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentGameDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="game__steamButton game__Button">Steam<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="game__heading">Production companies</div>
            <div className="game__production">
                {
                    currentGameDetail && currentGameDetail.production_companies && currentGameDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="game__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Game
