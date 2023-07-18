import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.scss";
import { remove } from "../../features/movies/watchlistSlice";

function Cart() {
  const data = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeToCart = (imdbID) => dispatch(remove(imdbID))


  const cards  = data.map((data) => ( 
    <div key={data.imdbID} className="cart-item">
      <div className="cart-inner">
        <div className="cart-top">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="cart-bottom">
          <div className="cart-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
            <div className="button-actions">
              {/* <Link to={`/movie/${data.imdbID}`}>
                <button type="submit">
                  <div className="button-text">Movie Info</div>
                </button>
              </Link> */}
              <button className="button-text-remove" onClick={() => removeToCart(data.imdbID)}>
                  <div className="button-text">Remove from Watchlist</div>
                </button>
                </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return <>{cards}</>;
}

export default Cart;
