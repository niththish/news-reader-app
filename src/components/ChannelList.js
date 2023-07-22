import React, { useEffect, useState } from "react";
import "../styles/channelList.css";

const ChannelList = () => {
  const [sources, setSources] = useState();
  useEffect(() => {
    const url = `${process.env.REACT_APP_NEWS_API_URL}top-headlines/sources?apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

    fetch(url).then((val) => {
      val.json().then((data) => {
        setSources(data.sources);
      });
    });
  }, []);
  return (
    <div className="container">
      <h4 className="list-header">Available Sources</h4>
    </div>
  );
};

export default ChannelList;
