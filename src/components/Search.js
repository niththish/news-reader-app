import { useContext } from "react";
import { newsContext } from "../context/NewsContext";
import "../styles/search.css";

const Search = () => {
  const { getNewsData } = useContext(newsContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="type here to search"
        onChange={(e) => getNewsData(e.target.value)}
      />
    </div>
  );
};

export default Search;
