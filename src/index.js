import React from 'react';
import axios from 'axios';
import './index.css';
import ReactDOM from 'react-dom'

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

    /* https://fortnite-api.com/v1/stats/br/v2?name=Guyfierimustdie&time=lifetime */
  handleSubmit(event) {
    alert('Name: ' + this.state.value);
    event.preventDefault();
    (async () => {
      const response = await axios.get('https://fortnite-api.com/v1/stats/br/v2',
        {params: {name: `${this.state.value}`}}
      );
        
      
    
      console.log(response)
    })()
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}





ReactDOM.render(
  <Stats/>,
  document.getElementById('root')
);