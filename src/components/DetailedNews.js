import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/detailedNews.css";

const DetailedNews = () => {
  const { state } = useLocation();
  const data = state.data;

  console.log(data);

  return (
    <div className="detailed-news">
      <h4>{data.title}</h4>
      <div className="author-info">
        <p>{data.author}</p>
        <p className="date">{new Date(data.publishedAt).toDateString()}</p>
      </div>
      <div className="detailed-news-image">
        <img src={data.urlToImage} />
      </div>
      <div className="detailed-news-content">
        <p>{data.content}</p>
        <p>
          source:-{" "}
          <span style={{ color: "#C100A2", fontWeight: "bolder" }}>
            {data.source.name}
          </span>
        </p>
        <a href={data.url} target="_blank">
          click here to read more
        </a>
      </div>
    </div>
  );
};

export default DetailedNews;
