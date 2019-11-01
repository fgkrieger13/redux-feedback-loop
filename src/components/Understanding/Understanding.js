import React, { Component } from 'react';


class Understanding extends Component {
  render() {
    return (
    <form>
        <input onChange={this.props.handleChangeFor('understanding')} 
        value={this.props.understanding}
        type="number" placeholder="0-5 understanding" />
        <input type="submit" value="Next" />
    </form>
    );
  }
}

export default Understanding;
