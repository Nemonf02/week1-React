import React, { Component } from 'react';
import Person from './Person/Basicinfo'
class App extends Component {
  state = {
    persons: [
      { name: 'Numa', age: 18, number: 4022223542 },
      { name: 'Anum', age: 15, number: 4022223542 },
      { name: 'Fatimah', age: 20,number: 4022223542 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 28,number: 4022223542 },
        { name: 'Asma', age: 29,number: 4022223542 },
        { name: 'Arif', age: 27,number: 4022223542 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Samia', age: 28,number: 4022223542 },
        { name: event.target.value, age: 29,number: 4022223542 },
        { name: 'Taqi', age: 26,number: 4022223542 }
      ]
    } )
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Week 1 of React</h1>
        
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Samia')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          number={this.state.persons[0].number}
           />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          number={this.state.persons[1].number}
          click={this.switchNameHandler.bind(this, 'Taqi')}
          changed={this.nameChangedHandler} ></Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          number={this.state.persons[2].number}/>
      </div>
    );
   
  }
}

export default App;
