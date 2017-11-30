import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyArNlBKFTphB5ShJRNHwG6b7aLqimnO4Fk";

YTSearch({key: API_KEY, term: 'skidiving'}, function(data){
  // do something with response
});


const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(
  <App />, document.querySelector('.container')
);
