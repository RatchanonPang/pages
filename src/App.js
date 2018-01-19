import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';

const students =[
  {id: 34,name: 'Pang', score: 50},
  {id: 18,name: 'Jason', score: 27},
  {id: 20,name: 'Tim', score: 22},
]

const StudentLine = (props) =>(
  <div>{props.id} {props.name} = {props.score}</div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          _.map(students,s => (<StudentLine {...s}key={s.id}/>))
        }
      </div>
    );
  }
}

export default App;
