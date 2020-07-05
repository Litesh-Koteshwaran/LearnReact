import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

// life cycle method, componentDidMount(), is used to fetch the required data before 
// it gets loaded to DOM
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())//defining the response type which can be text etc
      .then(users => this.setState({ monsters: users }))
  }

// to access the context of this class we use arrow function
// and by using arrow function there is no need of bind the class context to this method,
// else we should use => this.handleChange = this.handleChange.bind(this) inside the constructor
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Blogs</h1>
        <SearchBox placeholder='search monsters'
          handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
