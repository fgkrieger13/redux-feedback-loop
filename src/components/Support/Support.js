import React, { Component } from 'react';


class Support extends Component {
  render() {
    return (
    <form>
        <input onChange={this.props.handleChangeFor('support')} 
        value={this.props.support}
        type="number" placeholder="0-5 support" />
        <input type="submit" value="Next" />
    </form>
    );
  }
}

export default Support;
