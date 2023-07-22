import React from "react";
import "../styles/channelList.css";

const ChannelCard = ({ source }) => {
  return (
    <div className="channel-card">
      <div className="top-fixed-info">
        <h4>{source.country}</h4>
        <h4>{source.language}</h4>
      </div>
      <h4 className="channel-name">{source.name}</h4>
      <p className="channel-description">{source.description}</p>
    </div>
  );
};

export default ChannelCard;
