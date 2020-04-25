import React from 'react';
import {CardList} from './components/card-list/card-list'
import './App.css';
import { FilterBar } from './components/filter-bar/filter-bar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      monsters: [],
      searchQuery: ''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({
          monsters: users,
          searchQuery: ''
        })
      })
  }

  handleChange(e) {
    this.setState({searchQuery: e.target.value})
  }

  render() {
    const { monsters, searchQuery } = this.state;
    let filteredMonsters= monsters.filter(monster => monster.name.toLowerCase().includes(searchQuery))
    return (
      <div className="App">
      <h1>Robot Hunter</h1>
        <FilterBar placeholder="Search Robots" handleChange={this.handleChange} />
        <ul className="card-list">
          <CardList cards={filteredMonsters}>Hello govnah</CardList>
        </ul>
      </div>
    )
  }
}

export default App;
