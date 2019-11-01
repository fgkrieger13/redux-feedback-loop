import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'


class Review extends Component {
    
    handleSubmit = () => {
        this.props.submitForm();
        this.props.history.push('/')
    }

  render() {
    return (
    <>
    <h1>Review Your Feedback</h1>

    
            <p>{this.props.studentForm.feeling}</p>
            <p>{this.props.studentForm.understanding}</p>
            <p>{this.props.studentForm.support}</p>
            <p>{this.props.studentForm.comments}</p>
            <button onClick={this.handleSubmit}>Submit</button>
        </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
  }
  export default withRouter(connect(mapReduxStateToProps)(Review));