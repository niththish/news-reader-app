import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const ChannelNews = () => {
  const id = useParams("id").id;

  const [newsData, setNewsData] = useState();
  useEffect(() => {
    const url = `${process.env.REACT_APP_NEWS_API_URL}top-headlines?sources=${id}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    fetch(url).then((val) => {
      val.json().then((data) => {
        setNewsData(data.articles);
      });
    });
  }, []);
  return (
    <>
      <div className="news-cards">
        {newsData &&
          newsData.map((data, index) => {
            return <NewsCard key={index} data={data} />;
          })}
      </div>
    </>
  );
};

export default ChannelNews;
