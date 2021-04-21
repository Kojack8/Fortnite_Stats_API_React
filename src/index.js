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
    this.onValueChange = this.onValueChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

    /* https://fortnite-api.com/v1/stats/br/v2?name=Guyfierimustdie&time=lifetime */
  handleSubmit(event) {
    alert('Name: ' + this.state.value);
    event.preventDefault();
    (async () => {
      try {
        const response = await axios.get('https://fortnite-api.com/v1/stats/br/v2',
        {params: {
          name: `${this.state.value}`, 
          timeWindow: "season"}}
        );
        console.log(response);
      } catch(err) {
        console.error("Error response:");
        console.error(err.response.status); 
        console.error(err.response.data.error);    

      } 
      
    
    
    })()
  }

  onValueChange(event) {
    this.setState({ selectedOption: event.target.value});
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="user_input">
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </div>
        <div className="radio">
          <label>
            Lifetime:
            <input type="radio" value="Lifetime" checked={this.state.selectedOption === "Lifetime"} onChange={this.onValueChange} />
          </label>
        </div>
        <div className="radio">
          <label>
            Season:
            <input type="radio" value="Season" checked={this.state.selectedOption === "Season"} onChange={this.onValueChange} />
          </label>
        </div>
        
        <input type="submit" value="Submit" />
      </form>
    );
  }
}





ReactDOM.render(
  <Stats/>,
  document.getElementById('root')
);