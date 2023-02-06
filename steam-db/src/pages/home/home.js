import React, { useEffect, useState } from "react"
import "./home.css"
// import "react-responsive-carousel/lib/style/carousel.min.css"
// import {Carousel} from "react-responsive-carousel"
// import {Link} from "react-router-dom"
// import GameList from "../../components/gameList/gameList";

const Home = () => {

    // const [popularGames, setPopularGames] = useState([])

    // useEffect(() => {
    //     fetch("https://cors-anywhere.herokuapp.com/https://steamspy.com/api.php?request=top100in2weeks")
    //     .then(res => res.json())
    //     // .then(data => setPopularGames(data.results))
    //     .then(data => setPopularGames(data.results))
    // }, [])

    fetch("https://cors-anywhere.herokuapp.com/https://steamspy.com/api.php?request=top100in2weeks")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const appidArray = Object.keys(data); 
        // const appidDataArray = appidArray.map(function (appid) {
        //     return {
        //         appid,
        //         ccu: data[appid].ccu
        //     };
        // });
        // appidDataArray.sort(function (a, b) {
        //     return b.ccu - a.ccu;
        // });      
        //  // grab only the first 10 
        // const top20 = appidDataArray.slice(0, 20);
        // console.log(top20);
    })
    .catch(function (err) {
        console.log(err);
    });

    // getJSON('https://steamspy.com/api.php?request=top100in2weeks',
    // function(err, data) {
    // if (err !== null) {
    //     alert('Something went wrong: ' + err);
    // } else {
    //     alert('Your query count: ' + data.query.count);
    // }
    // });

    // console.log(popularGames)

    return (
        <>
            Home Page is now rendered
        </>
    )
}

export default Home


// const Home = () => {

//     const [ popularMovies, setPopularMovies ] = useState([])

//     useEffect(() => {
//         fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
//         .then(res => res.json())
//         .then(data => setPopularMovies(data.results))
//     }, [])

//     return (
//         <>
//             <div className="poster">
//                 <Carousel
//                     showThumbs={false}
//                     autoPlay={true}
//                     transitionTime={3}
//                     infiniteLoop={true}
//                     showStatus={false}
//                 >
//                     {
//                         popularMovies.map(movie => (
//                             <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
//                                 <div className="posterImage">
//                                     <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
//                                 </div>
//                                 <div className="posterImage__overlay">
//                                     <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
//                                     <div className="posterImage__runtime">
//                                         {movie ? movie.release_date : ""}
//                                         <span className="posterImage__rating">
//                                             {movie ? movie.vote_average :""}
//                                             <i className="fas fa-star" />{" "}
//                                         </span>
//                                     </div>
//                                     <div className="posterImage__description">{movie ? movie.overview : ""}</div>
//                                 </div>
//                             </Link>
//                         ))
//                     }
//                 </Carousel>
//                 <MovieList />
//             </div>
//         </>
//     )
// }

// export default Home
