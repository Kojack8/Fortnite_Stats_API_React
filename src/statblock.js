import React from 'react';

class StatBlock extends React.Component {
  constructor(data) {
    this.data = data


  }
  
  render() {
    return <h1> Hello, {this.state.data}</h1>
  }
}
export default StatBlock; 