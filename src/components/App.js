import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetial from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], SelectedVideo: null };
  componentDidMount() {
    this.onFormSubmit("Toronto");
  }
  onFormSubmit = async key => {
    const response = await Youtube.get("/search", {
      params: { q: key }
    });
    this.setState({
      videos: response.data.items,
      SelectedVideo: response.data.items[0]
    });
  };
  videoSelect = video => {
    console.log("App list Clicked!", video);
    this.setState({ SelectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetial video={this.state.SelectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.videoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
