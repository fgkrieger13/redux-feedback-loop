import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Understanding extends Component {

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.history.push('/support')
    }

  render() {
    return (
    <>
    <h1>How well are you understanding the content?</h1>
    <form onSubmit={this.onSubmit}>
        <input onChange={this.props.handleChangeFor('understanding')} 
        value={this.props.understanding}
        type="number" placeholder="0-5 understanding" />
        <input type="submit" value="Next" />
    </form>
    </>
    );
  }
}

export default withRouter(Understanding);
