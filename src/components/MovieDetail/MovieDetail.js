import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncDetail,
  getSelectedDetail,
  removeSelectedFilm,
} from "../../features/movies/movieSlice";
import { FaCalendar, FaFilm, FaStar, FaThumbsUp } from "react-icons/fa";
import "./MovieDetail.scss";
import { IconContext } from "react-icons";

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedDetail);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncDetail(imdbID));
    //Clean up action
    return () => {
      dispatch(removeSelectedFilm());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <IconContext.Provider value={{ color: "#ff9e00" }}>
                <span>
                  IMDB Rating <FaStar /> :{data.imdbRating}
                </span>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "#fafafa" }}>
                <span>
                  IMDB Votes <FaThumbsUp /> :{data.imdbVotes}
                </span>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "rgb(191, 213, 214)" }}>
                <span>
                  Runtime <FaFilm /> :{data.Runtime}
                </span>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "peachpuff" }}>
                <span>
                  Calender <FaCalendar /> :{data.Year}
                </span>
              </IconContext.Provider>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
