import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import styles from "./App.module.css";

function App() {
  return (
    <div className="bg-gray-200 h-screen p-5">
      <header className="flex justify-between mb-5">
        <h1 className="text-2xl font-bold">My cooking recipes (100)</h1>
        <div className="flex bg-white w-1/2 py-1 px-3 rounded-full">
          <button className="p">
            <SearchIcon color="action" />
          </button>
          <input
            className="w-full ml-1 px-2"
            placeholder="Search recipe"
          ></input>
        </div>
      </header>
      <nav className="flex font-medium justify-between">
        <div className="flex gap-10">
          <button className={`${styles.underlineHover}`}>All</button>
          <button className={`${styles.underlineHover}`}>Favorites</button>
        </div>
        <button>
          Filter <FilterAltIcon sx={{ color: "black" }} />
        </button>
      </nav>
    </div>
  );
}

export default App;
