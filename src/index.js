import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyArNlBKFTphB5ShJRNHwG6b7aLqimnO4Fk";
// we want to create new component
// this component should produce some HTML
const App = () => {
  return(
    <div>
      <SearchBar />
    </div>
  );
}

// Take this's component generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(
  <App />, document.querySelector('.container')
);
