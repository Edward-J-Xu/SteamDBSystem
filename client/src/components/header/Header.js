import React from "react";
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header_icon" src="https://cdn-icons-png.flaticon.com/512/220/220223.png" /></Link>
                <Link to="/games/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/games/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/games/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="/games/posts" style={{textDecoration: "none"}}><span>Posts</span></Link>
            </div>
        </div>
    )
}

export default Header
