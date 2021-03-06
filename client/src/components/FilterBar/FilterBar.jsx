import React, { useEffect, useState } from "react";
import style from "./FilterBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonTypes,
  orderPokemon,
  filterByType,
  filterByCreator,
  clearState,
} from "../../actions/index.js";

function FilterBar() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonTypes);
  const [showFilterBar, setShowFilterBar] = useState(false);
  const [selectType, setSelectType] = useState("");
  const [selectCreator, setSelectCreator] = useState("");
  const [selectOrder, setSelectOrder] = useState("");

  useEffect(() => {
    dispatch(getPokemonTypes());
  }, []);

  const order = (e) => {
    setSelectOrder(e.target.value);
    if (e.target.value === "alph" || e.target.value === "attack") return;
    dispatch(orderPokemon(e.target.value));
  };

  const filterType = (e) => {
    setSelectType(e.target.value);
    if (e.target.value === "type") return dispatch(clearState());
    dispatch(filterByType(e.target.value));
  };

  const filterCreator = (e) => {
    setSelectCreator(e.target.value);
    if (e.target.value === "all") return dispatch(clearState());
    dispatch(filterByCreator(e.target.value));
  };

  const clearAllFilters = () => {
    setSelectType("");
    setSelectCreator("");
    setSelectOrder("");
    dispatch(clearState());
  };

  if (!showFilterBar) {
    return (
      <div className={style.bigContainer}>
        <button
          className={style.showFilter}
          onClick={() => setShowFilterBar(true)}
        >
          Show filters
        </button>
      </div>
    );
  } else {
    return (
      <div className={style.bigContainer}>
        <div className={style.container}>
          <div className={style.filters}>
            <p>Filter by</p>
            <select onChange={filterType} value={selectType}>
              <option value="type">Type</option>
              {types &&
                types
                  .sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                  })
                  .map((type) => {
                    return (
                      <option value={type.name} key={type.id}>
                        {type.name}
                      </option>
                    );
                  })}
            </select>
            <select onChange={filterCreator} value={selectCreator}>
              <option>Source</option>
              <option value="all">All</option>
              <option value="false">Api</option>
              <option value="true">Db</option>
            </select>
          </div>
          <div className={style.filters}>
            <p>Order by</p>
            <select onChange={order} value={selectOrder}>
              <option value="alph">Alphabetical</option>
              <option value="asc">Ascending (A-Z)</option>
              <option value="desc">Descending (Z-A)</option>
            </select>
            <select onChange={order} value={selectOrder}>
              <option value="attack">Attack</option>
              <option value="less">Less (-)</option>
              <option value="more">More (+)</option>
            </select>
          </div>
          <div className={style.buttons}>
            <button className={style.buttonClear} onClick={clearAllFilters}>
              Clear filters
            </button>
            <button
              className={style.buttonHide}
              onClick={() => setShowFilterBar(false)}
            >
              Hide filters
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterBar;
