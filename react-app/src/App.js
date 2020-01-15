import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  constructor() {
    super(); // gives us access to "this.state"
    this.state = {
      movies: [
        {
          id: "1",
          name: "Interstellar"
        },
        {
          id: "2",
          name: "The prestige"
        },
        {
          id: "3",
          name: "Inception"
        },
        {
          id: "4",
          name: "1971"
        }
      ]
    };
  }

  render() {
    return (
      // Similar to HTML but is JSX
      <div className="App">
        <header className="App-header">
          {this.state.movies.map(movie => (
            <p key={movie.id}>{movie.name}</p>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
