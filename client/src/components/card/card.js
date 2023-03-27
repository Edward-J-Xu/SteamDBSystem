import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({game}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 300)
    }, [])

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={150}  />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/game/${game.game_id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={game.game_image ? game.game_image : ""} alt={game.name} />
                <div className="cards__overlay">
                    <div className="card__title">{game.name}</div>
                    <div className="card__runtime">
                        {`${game.release_year}-${game.release_month}-${game.release_day}`}
                        <span className="card__rating">{game.rating}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{game.description ? game.description.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards
