import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

class App extends Component {
state = {
  student: {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
  }

}

componentDidMount() { // react Component method
  this.studentForms();
}

studentForms = () => {
  axios({
    method: 'GET',
    url: '/student'
  }).then((response) => {
    console.log(response.data);
    // response.data will be the array of artists
    this.props.dispatch({type: 'ADD_LIST', payload: response.data})
  });
}

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      student: {
        ...this.state.student,
        [propertyName]: event.target.value,
      }
    });
  }

  submitForm = () => {
    this.props.dispatch({type: 'ADD_FORM', payload: (this.state.student)})
      axios({
          method: "POST",
          url: "/student",
          data:
            this.state.student,
            })
             .then(() => {
              this.studentForms()
            })
            .catch ((error) => {
            console.log("error on post /student", error)
            })
  }


  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Link to = "/feeling">Feedback Form</Link>
        <Route exact path="/feeling" render={() => <Feeling 
        feeling = {this.state.student.feeling}
        handleChangeFor= {this.handleChangeFor} />}></Route>

        <Route exact path="/understanding" render={() => <Understanding 
        understanding = {this.state.student.understanding}
        handleChangeFor= {this.handleChangeFor}/>}></Route>

        <Route exact path="/support" render={() => <Support 
        support = {this.state.student.support}
        handleChangeFor= {this.handleChangeFor}/>}></Route>

        <Route exact path="/comments" render={() => <Comments 
        comments = {this.state.student.comments}
        handleChangeFor= {this.handleChangeFor}/>}></Route>

        <Route exact path="/review" render={() => <Review
        studentForm = {this.state.student}
        submitForm= {this.submitForm}/>}></Route>

      <table>
          <tbody>
              {this.props.listReducer.map((student) => (
                <tr key={student.id}>
                 <td>{student.feeling}</td>
                 <td>{student.understanding}</td>
                 <td>{student.support}</td>
                 <td>{student.comments}</td>
                </tr>
                ))}
          </tbody>
      </table>

        <pre>{JSON.stringify(this.props.formReducer, null, 2)}</pre>
        
        {/* <Feeling 
        feeling = {this.state.student.feeling}
        handleChangeFor= {this.handleChangeFor}/>
        <Understanding 
        understanding = {this.state.student.understanding}
        handleChangeFor= {this.handleChangeFor}/>
        <Support 
        support = {this.state.student.support}
        handleChangeFor= {this.handleChangeFor}/>
        <Comments 
        comments = {this.state.student.comments}
        handleChangeFor= {this.handleChangeFor}/> */}

      </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState
}
export default (connect(mapReduxStateToProps)(App));
