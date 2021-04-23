import React, { Component } from 'react';
import './statblock.css'

class OverallBlock extends Component {
  constructor(props) {
    super(props);
    this.data = props;
  }

  
  
  
  render() {
    if (this.props.data['data']['data']['stats']['all']['overall'] !== null ) {
      return (
        <div className="statTable">
          <p>Overall:</p>
          <div className="statRow">
            <div className="statTitle">
              Score: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['score']}
            </div>
          </div>
    
          <div className="statRow">
            <div className="statTitle">
              Score per minute:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['scorePerMin']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Score per match: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['scorePerMatch']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Wins: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['wins']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Top 3: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['top3']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Top 5: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['top5']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Top 6: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['top6']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Top 10: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['top10']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Top 12: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['top12']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Top 25: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['top25']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Kills:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['kills']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Kills per minute: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['killsPerMin']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Kills per match: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['killsPerMatch']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              K/D Ratio: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['kd']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Matches:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['matches']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Win rate:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['winRate']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Minutes played:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['minutesPlayed']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Players out lived:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['overall']['playersOutlived']}
            </div>
          </div>
        </div>     
     )}
     else {
       return null
     }
   }
 }
export default OverallBlock; 