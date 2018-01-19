import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const students =[
  {id: 34,name: 'Pang', score: 50},
  {id: 18,name: 'Jason', score: 27},
  {id: 20,name: 'Tim', score: 22},
]

const Home = () => (<div>Home</div>)
const Students = () => (
  <div>
    students
  </div>
)

const StudentLine = (props) =>(
  <div>{props.id} {props.name} = {props.score}</div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/students" component={Students}/> 
          </div>       
        </Router>
        }
      </div>
    );
  }
}

export default App;


