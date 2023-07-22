import React from "react";
import defaultImage from "../assets/default_image.webp";
import { Link } from "react-router-dom";

const NewsCard = React.memo(({ data }) => {
  return (
    <Link to="/detailed-news" state={{ data: data }} className="news-card">
      <img src={data.urlToImage || defaultImage} />
      <div className="news-title">
        <h5>{data.title}</h5>
      </div>
    </Link>
  );
});

export default NewsCard;
