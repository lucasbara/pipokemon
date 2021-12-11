import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Pokemons from "../Pokemons/Pokemons.jsx";
import axios from "axios";

function Home() {
  return (
    <div>
      <Header />
      <Pokemons />
      <Footer />
    </div>
  );
}

export default Home;
