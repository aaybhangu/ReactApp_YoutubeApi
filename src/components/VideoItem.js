import React from "react";
import "./VideoItem.css";
class VideoItem extends React.Component {
  VideoClicked = () => {
    console.log("video Cilcked");
    this.props.onVideoClick();
  };
  render() {
    console.log(this.props.video);
    return (
      <div
        onClick={() => this.props.onVideoClick(this.props.video)}
        className="video-item item"
      >
        <img
          className="ui image"
          alt={this.props.video.snippet.title}
          src={this.props.video.snippet.thumbnails.medium.url}
        />

        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
