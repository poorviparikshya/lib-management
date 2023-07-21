import React, { useState } from 'react';
import './App.css';

function App() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchClick = () => {
    setShowSearchBar(true);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="logo">nagarro</div>
        <div className="buttons">
          <button className="action-button">Catalog</button>
          <button className="action-button">Return</button>
          <button className="action-button" onClick={handleSearchClick}>
            Search
          </button>
        </div>
      </div>
      {showSearchBar && (
        <div className="search-bar">
          <input type="text" placeholder="Search for Books..." />
          <button className="action-button">Search</button>
        </div>
      )}
      <div className="books">
        <div className="book">
          <div className="book-info">
            <div className="title">Book Title 1</div>
            <div className="author">Author 1</div>
            <div className="pages">100 pages</div>
            <div className="genre">Genre 1</div>
          </div>
          <button className="view-button">View</button>
        </div>
        <div className="book">
          <div className="book-info">
            <div className="title">Book Title 2</div>
            <div className="author">Author 2</div>
            <div className="pages">200 pages</div>
            <div className="genre">Genre 2</div>
          </div>
          <button className="view-button">View</button>
        </div>
        {/* Add more book entries here */}
      </div>
    </div>
  );
}

export default App;
