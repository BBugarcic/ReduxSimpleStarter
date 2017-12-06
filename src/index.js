import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoPlayer from './components/video_player';

const API_KEY = "AIzaSyArNlBKFTphB5ShJRNHwG6b7aLqimnO4Fk";

class App extends Component {

  constructor(props){
    super(props);

    this.state = { videos: [] };
    YTSearch({key: API_KEY, term: 'best skidiving 2017'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return(
      <div>
        <SearchBar />
        <VideoPlayer video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

ReactDOM.render(
  <App />, document.querySelector('.container')
);
