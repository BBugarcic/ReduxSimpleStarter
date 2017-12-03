import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = "AIzaSyArNlBKFTphB5ShJRNHwG6b7aLqimnO4Fk";

class App extends Component {

  constructor(props){
    super(props);

    this.state = { videos: [] };
    YTSearch({key: API_KEY, term: 'skidiving'}, (videos) => {
      this.setState({ videos });
    });

  }

  render() {
    return(
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;

ReactDOM.render(
  <App />, document.querySelector('.container')
);
