import React, { Component } from 'react';


class Feeling extends Component {
  render() {
    return (
    <form>
        <input onChange={this.props.handleChangeFor('feeling')} 
        value={this.props.feeling}
        type="number" placeholder="0-5 feeling" />
        <input type="submit" value="Next" />
    </form>
    );
  }
}

export default Feeling;
