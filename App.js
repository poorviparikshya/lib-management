import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Nagarro Library</h1>
        <div className="button-container">
          <button className="action-button" onClick={returnBook}>Return a Book</button>
          <button className="action-button" onClick={borrowBook}>Borrow a Book</button>
        </div>
      </header>
    </div>
  );
}

function returnBook() {
  alert("You have selected 'Return a Book'.");
  // Add your code to handle returning a book here
}

function borrowBook() {
  alert("You have selected 'Borrow a Book'.");
  // Add your code to handle borrowing a book here
}

export default App;
