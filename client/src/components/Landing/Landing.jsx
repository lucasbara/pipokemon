import React from "react";
import style from "./Landing.module.css";
import Logo from "../../img/logo.png";
import Pikachu from "../../img/pikachu.png";
import { AiFillHeart } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { DiReact } from "react-icons/di";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={style.bigContainer}>
      <div className={style.header}>
        <img src={Logo} alt="Pokémon Logo" className={style.logo} />
        <Link to="/home">
          <button>Launch App</button>
        </Link>
      </div>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.mainText}>
            <h1>Gotta Catch 'Em All!</h1>
            <p>
              All the Pokémon data you'll ever need in one place, easily
              accessible through a modern webpage.
            </p>
            <Link to="/home">
              <button>Enter the Pokeworld</button>
            </Link>
          </div>
          <img src={Pikachu} alt="Charizard" />
        </div>
      </div>
      <div className={style.footer}>
        <p>
          <BiCodeAlt />
          &ensp;with&ensp;
          <AiFillHeart /> by Lucas Barallobre using <DiReact />
        </p>
      </div>
    </div>
  );
}

export default Landing;
