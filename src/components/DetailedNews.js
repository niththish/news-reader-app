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
        <p>
          Author:- <span>{data.author}</span>
        </p>
        <p>
          Published at:-{" "}
          <span>{new Date(data.publishedAt).toDateString()}</span>
        </p>
      </div>
      <div className="detailed-news-image">
        <img src={data.urlToImage} />
      </div>
      <div className="detailed-news-content">
        <p>{data.description}</p>
        <p>{data.content}</p>
        <a href={data.url} target="_blank">
          click here to read more
        </a>
      </div>
    </div>
  );
};

export default DetailedNews;
