import React from "react";
import Logo from "../logo.png";
import style from "./Search.module.css";

const Search = ({ input, getInput, getData }) => {
  return (
    <div className={style.main}>
      <img className={style.img} src={Logo} alt="Logo" />
      <form className={style.form} onSubmit={getData}>
        <input
          className={style.input}
          type="text"
          value={input}
          onChange={getInput}
          name="input"
          placeholder="Enter..."
        />
        <input className={style.button} type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;
