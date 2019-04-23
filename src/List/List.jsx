import React from "react";
import history from "../history";
import style from "./List.module.css";

const List = ({ data, getId}) => {
  return (
    <div className={style.main}>
      <button className={style.button} onClick={() => history.push("/")}>
        To the search
      </button>
      <ul className={style.list}>
        {
          data.map(el => (
            <li
              className={style.item}
              key={el.show.id}
              id={el.show.id}
              onClick={() => getId(el.show.id)}
            >
              <img
                className={style.img}
                src={el.show.image.medium}
                alt={el.show.name}
              />
              <h2 className={style.title}>{el.show.name}</h2>
              <p className={style.genres}>Genres:</p>
              {el.show.genres.map(elem => (
                <p className={style.genres_item} key={Math.random()}>
                  {elem}
                </p>
              ))}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default List;
