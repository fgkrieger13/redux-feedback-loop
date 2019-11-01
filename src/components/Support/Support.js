import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Support extends Component {

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.history.push('/comments')
    }

  render() {
    return (
    <>
    <h1>How well are you being supported?</h1>
    <form onSubmit={this.onSubmit}>
        <input onChange={this.props.handleChangeFor('support')} 
        value={this.props.support}
        type="number" placeholder="0-5 support" />
        <input type="submit" value="Next" />
    </form>
    </>
    );
  }
}

export default withRouter(Support);
