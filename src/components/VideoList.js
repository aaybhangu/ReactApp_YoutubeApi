import React from "react";
import VideoItem from "./VideoItem";
class VideoList extends React.Component {
  render() {
    const VideoItems = this.props.videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          onVideoClick={this.props.onVideoSelect}
          video={video}
        />
      );
    });
    return <div className="ui relaxed divided list">{VideoItems}</div>;
  }
}

export default VideoList;
