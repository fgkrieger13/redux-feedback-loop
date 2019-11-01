import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class Feeling extends Component {

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.history.push('/understanding')
    }

  render() {
    return (
    <>
    <h1>How are you feeling today?</h1>
    <form onSubmit={this.onSubmit}>
        <input onChange={this.props.handleChangeFor('feeling')} 
        value={this.props.feeling}
        type="number" placeholder="0-5 feeling" />
        <input type="submit" value="Next" />
    </form>
    </>
    );
  }
}

export default withRouter(Feeling);
