import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  //Parent
  constructor() {
    super(); // Pulls all functionality of component which is Components Life Cycles Methods
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json(); //Convert to json format
    this.setState({ monsters: users }); //Set monster to response
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
