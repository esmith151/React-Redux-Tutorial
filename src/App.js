import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';
import { maxHeaderSize } from 'http';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Eric',
        age: 25
      },
      {
        name: 'Jen',
        age: 32
      },
      {
      name: 'Steve',
      age: 15,
      }
    ]
  }
   changeName = () => {
    const newPersons = [
      {
       name: 'Stan',
       age: 15
      },
      {
        name: 'Joe',
        age: 13
      },
      {
        name: 'Schmo',
        age: 36
      }
     ]
   this.setState({persons: newPersons})
  }
  render() {
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <button onClick = {this.changeName}>Switch name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}/>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
