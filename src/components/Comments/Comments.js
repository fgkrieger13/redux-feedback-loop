import React, { Component } from 'react';


class Comments extends Component {
  render() {
    return (
    <form>
        <input onChange={this.props.handleChangeFor('comments')} 
        value={this.props.support}
        type="text" placeholder="comment" />
        <input type="submit" value="Next" />
    </form>
    );
  }
}

export default Comments;
