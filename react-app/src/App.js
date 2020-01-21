import React, { Component } from "react";
// import logo from './logo.svg';
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super(); // gives us access to "this.state"
    this.state = {
      users: [
        // this will be our initial state, no more hard coding
      ],
      searchField: ""
    };
  }

  // API call
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ users: myJson });
      });
  }

  render() {
    // Destructuring Props in React
    const { users, searchField } = this.state;
    const filterUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      // Similar to HTML but is JSX
      <div className="App">
        <header className="App-header">
          <input
            type="search"
            placeholder="seach users"
            onChange={e => this.setState({ searchField: e.target.value })}
          />
          <CardList users={filterUsers}></CardList>
        </header>
      </div>
    );
  }
}

export default App;
