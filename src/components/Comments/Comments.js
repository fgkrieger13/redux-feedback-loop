import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Comments extends Component {

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.history.push('/review')
    }

  render() {
    return (
    <>
    <h1>Any comments you want to leave?</h1>
    <form onSubmit={this.onSubmit}>
        <input onChange={this.props.handleChangeFor('comments')} 
        value={this.props.comments}
        type="text" placeholder="comment" />
        <input type="submit" value="Next" />
    </form>
    </>
    );
  }
}

export default withRouter(Comments);
