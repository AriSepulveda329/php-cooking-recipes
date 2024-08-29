import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  return (
    <div className="bg-gray-200 h-screen p-5">
      <header className="flex justify-between">
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
    </div>
  );
}

export default App;
