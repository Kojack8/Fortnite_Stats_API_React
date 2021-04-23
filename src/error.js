import React, { Component } from 'react';
import './statblock.css'

class ErrorMsg extends Component {
  constructor(props) {
    super(props);
    this.data = props;
  }

  render() {
    return (
      <div>
        {this.props.data}
      </div>
    )
  }
}

export default ErrorMsg; 