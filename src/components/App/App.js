import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';

class App extends Component {
state = {
  student: {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
  }

}

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      student: {
        ...this.state.student,
        [propertyName]: event.target.value,
      }
    });
  }

  submitForm = (event) => {
    event.preventDefault();
    // TODO: Dispatch here
    this.props.dispatch({type: 'ADD_FORM', payload: (this.state.student)})
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Feeling 
        feeling = {this.state.student.feeling}
        handleChangeFor= {this.handleChangeFor}/>
        <Understanding 
        understanding = {this.state.student.understanding}
        handleChangeFor= {this.handleChangeFor}/>
        <Support 
        understanding = {this.state.student.support}
        handleChangeFor= {this.handleChangeFor}/>
        <Comments 
        understanding = {this.state.student.support}
        handleChangeFor= {this.handleChangeFor}/>
      </div>
    );
  }
}

export default App;
