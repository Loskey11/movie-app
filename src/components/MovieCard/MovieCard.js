import React from "react";
import { Link } from "react-router-dom";
import { add } from "../../features/movies/watchlistSlice";

import "./MovieCard.scss";
import { useDispatch } from "react-redux";


function MovieCard(props) {

  const dispatch = useDispatch();
  const { data } = props;
  const addToCart = (data) => {
    //dispatch an action
    dispatch(add(data));
  };
  
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
            <div className="button-actions">
            <Link to={`/movie/${data.imdbID}`}>
              <button type="submit">
                <div className="button-text">Movie Info</div>
              </button>
            </Link>
            <button onClick={() => addToCart(data)}>
                <div className="button-text">Add to Watchlist</div>
              </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
