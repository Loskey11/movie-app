import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { FaSearch, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import { IconContext } from "react-icons";

function Header() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.cart);
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") {
      return alert("Please enter a movie or show name!");
    }
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <div className="logo">Movie Dom</div>
      </Link>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movie or Series"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <Link to="/cart">
        <div className="watchlist">
          <span> Watchlist</span>
          <IconContext.Provider value={{ color: "#ff9e00" }}>
            <span>
              <FaStar />
            </span>
            <span className="watchlist-length">{watchlist.length}</span>
          </IconContext.Provider>
        </div>
      </Link>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}

export default Header;
