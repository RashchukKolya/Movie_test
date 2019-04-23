import React from "react";
import history from "../history";
import style from "./DetInfo.module.css";

const DetailInfo = ({ movie }) => {
  return (
    <div className={style.main}>
      <div className={style.btn_block}>
        <button className={style.btn} onClick={() => history.push("/list")}>
          To the list
        </button>
        <button className={style.btn} onClick={() => history.push("/")}>
          To the search
        </button>
      </div>
      <div className={style.content}>
        <img
          className={style.img}
          src={movie.image.original}
          alt={movie.name}
        />
        <div className={style.info}>
          <h2 className={style.title}>{movie.name}</h2>
          <div className={style.genres}>
            <p className={style.genres_title}>Genres: </p>
            <ul className={style.list}>
              {movie.genres.map(el => (
                <li key={Math.random()}>{el} </li>
              ))}
            </ul>
          </div>
          <p>
            <span className={style.bold}>Country: </span>
            {movie.network ? movie.network.country.name : "no info"}
          </p>
          <p>
            <span className={style.bold}>Premiered: </span>
            {movie.premiered ? movie.premiered : "no info"}
          </p>
          <p>
            <span className={style.bold}>Rating: </span>
            {movie.rating.average ? movie.rating.average : "no info"}
          </p>
          <p>
            <span className={style.bold}>Summary: </span>
            {movie.summary ? movie.summary : "no info"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailInfo;
