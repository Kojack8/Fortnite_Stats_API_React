import React from 'react';
import axios from 'axios';
import './index.css';
import ReactDOM from 'react-dom'

class Stats extends React.Component {
  render() {
    return (
      <div className="stat-block">
        yo
      </div>
    );
  }
}


;(async () => {
  const response = await axios({
    url: 'https://fortnite-api.com/v1/stats/br/v2?name=Guyfierimustdie&time=lifetime',
    method: 'get'
  })

  console.log(response)
})()



ReactDOM.render(
  <Stats/>,
  document.getElementById('root')
);