import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Options from "./Options";

const Headlines = () => {
  const [country, setCountry] = useState("in");
  const [headlines, setHeadlines] = useState();

  useEffect(() => {
    const url = `${process.env.REACT_APP_NEWS_API_URL}top-headlines?country=${country}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal }).then((val) => {
      val.json().then((data) => {
        setHeadlines(data.articles);
      });
    });
  }, [country]);

  return (
    <>
      <div
        className="headline-header"
        style={{ color: "#22279c", fontWeight: "bold" }}
      >
        <h4>Headlines</h4>
        <div>
          <span>country:-</span> <Options setCountry={setCountry} />
        </div>
      </div>
      {
        <div className="news-cards">
          {headlines
            ? headlines.map((data, index) => {
                return <NewsCard key={index} data={data} />;
              })
            : ""}
        </div>
      }
    </>
  );
};

export default Headlines;
