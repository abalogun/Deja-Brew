import React, { Component } from 'react';

export default class NickName extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    return (
      <div onClick={(e) => 
        { this.props.handleNameClick() }
        }>nickname:{ this.props.nickname }
      </div>
    )
  }
}
