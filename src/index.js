import React from 'react';
import axios from 'axios';
import './index.css';
import ReactDOM from 'react-dom'
import DuoBlock from './duoblock.js'
import SoloBlock from './soloblock.js'
import TrioBlock from './trioblock.js'
import SquadBlock from './squadblock.js'
import OverallBlock from './totalblock.js'
import ErrorMsg from './error.js'

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
        ReactDOM.render(<OverallBlock data={response}/>, document.getElementById('result1'));
        ReactDOM.render(<SoloBlock data={response}/>, document.getElementById('result2'));
        ReactDOM.render(<DuoBlock data={response}/>, document.getElementById('result3'));
        ReactDOM.render(<TrioBlock data={response}/>, document.getElementById('result4'));
        ReactDOM.render(<SquadBlock data={response}/>, document.getElementById('result5'));
        
        

      } catch(err) {
        const errorStr = "Error response: " + err.response.status + " " + err.response.data.error
        ReactDOM.render(<ErrorMsg data={errorStr} />, document.getElementById('result1'));
        ReactDOM.render(null, document.getElementById('result2'));
        ReactDOM.render(null, document.getElementById('result3'));
        ReactDOM.render(null, document.getElementById('result4'));
        ReactDOM.render(null, document.getElementById('result5'));
  

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
        <br />
        <div id="result1">
        </div>
        <div id="result2">
        </div>
        <div id="result3">
        </div>
        <div id="result4">
        </div>
        <div id="result5">
        </div>
      </div>
    );
  }
}





ReactDOM.render(
  <Stats/>,
  document.getElementById('root')
);