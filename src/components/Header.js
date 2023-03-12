import React, { useState } from "react";
import axios from "axios";

const Header = ({ setSearchResults }) => {
  const [search, setSearch] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await axios.get(`http://localhost:3300/location?search=${search}`);
    setSearchResults(results.data);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Location App</span>
      </div>
      <form onSubmit={handleSearch} className="w-full max-w-sm">
        <div className="flex items-center border-b border-white py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-transparent hover:bg-white border-white hover:border-transparent border-4 text-white hover:text-blue-500 font-semibold py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Header;
