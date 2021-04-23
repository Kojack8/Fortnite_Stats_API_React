import React, { Component } from 'react';

class StatBlock extends Component {
  constructor(props) {
    super(props);
    this.data = props;
  }
  
  
  render() {
    return <h1> Hello, {this.props.data['data']['data']['stats']['all']['duo']['kills']}</h1>
  }
}
export default StatBlock; 