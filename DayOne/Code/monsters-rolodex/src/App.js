import React from 'react';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Monsters: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({Monsters:users}))
  }
  render() {
    return (
      <div className="App">
        {
          this.state.Monsters.map(monster =>
            <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    );
  }
}
export default App;
