import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props); //call constructor from Parent class which is Component
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    setTimeout(() => {
      //Select a random Instructor
      const randomInstructor = Math.floor(Math.random() * this.state.instructors.length);

      //Select a random hobby from that instructor
      const randomHobby = Math.floor(Math.random() * this.state.instructors[randomInstructor].length);

      //Remove that hobby from the instructor's hobbies
      //Goal is to NOT modify state
      //This is accomplished by copying the state's data and modifying information behind the scenes

      const instructors = this.state.instructors.map((inst, index) => {
        if(index === randomInstructor){
          const hobbies = [...inst.hobbies];
          hobbies.splice(randomHobby, 1);
          return {
            ...inst,
            hobbies
          }
        }
        
        return inst;
      });

      this.setState({instructors}); //update the state

      //Another way of doing this:
      // const instructors = this.state.instructors.slice(); //create a shallow copy of the instructors list
      // instructors[randomInstructor] = Object.assign({}, instructors[randomInstructor]); //Create copy of the instructor object
      // instructors[randomInstructor].hobbies = instructors[randomInstructor].hobbies.slice(); //Create a shallow copy of the instructor's hobbies
      // instructors[randomInstructor].hobbies.splice(randomHobby, 1); //1st arg of splice is the index in question, the second arg specifies the number of items to remove at that index
      // this.setState({instructors})

    }, 1000);
  }

  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;