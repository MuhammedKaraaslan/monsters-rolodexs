import './App.css';
import React, { Component } from 'react';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFiled: ''
    };
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (event) => {
    this.setState({ searchFiled: event.target.value })
  }

  render() {

    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFiled.toLocaleLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder={'Give Me the Name'} handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
