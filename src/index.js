import React from 'react';
import axios from 'axios';
import './index.css';
import ReactDOM from 'react-dom'
import StatBlock from './statblock.js'

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
      selectedOption: "lifetime"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

    /* https://fortnite-api.com/v1/stats/br/v2?name=Guyfierimustdie&time=lifetime */
  handleSubmit(event) {
    alert('Name: ' + this.state.value + " Time Window = " + this.state.selectedOption);
    
    event.preventDefault();
    (async () => {
      try {
        const response = await axios.get('https://fortnite-api.com/v1/stats/br/v2',
        {params: {
          name: `${this.state.value}`, 
          timeWindow: `${this.state.selectedOption}`}}
        );
        console.log(response);
        ReactDOM.render(<StatBlock data={response.parse}/>, document.getElementById('result'));
        

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
      <div>
        <div className="search_form">
          Fortnite Player Search <br/>
          Enter the Epic username you wish to search for
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
                <input type="radio" value="lifetime" checked={this.state.selectedOption === "lifetime"}   onChange={this.onValueChange} />
              </label>
            </div>
            <div className="radio">
              <label>
                Season:
                <input type="radio" value="season" checked={this.state.selectedOption === "season"} onChange={this.onValueChange} />
              </label>
            </div>    
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div id="result">
        </div>
      </div>
    );
  }
}





ReactDOM.render(
  <Stats/>,
  document.getElementById('root')
);