import React from "react";
import { useContext } from "react";
import { newsContext } from "../context/NewsContext";
import "../styles/news.css";
import Headlines from "./Headlines";
import NewsCard from "./NewsCard";

const News = () => {
  const { newsData, searchText } = useContext(newsContext);

  return (
    <>
      <div className="news-cards">
        {newsData ? (
          <>
            <div className="article-header">
              {searchText ? <h4>Articles on {searchText}</h4> : ""}
            </div>
            {newsData.map((data, index) => {
              return <NewsCard key={index} data={data} />;
            })}
          </>
        ) : (
          <Headlines />
        )}
      </div>
    </>
  );
};

export default React.memo(News);
