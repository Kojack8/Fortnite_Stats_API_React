import React, { Component } from 'react';
import './statblock.css'

class TrioBlock extends Component {
  constructor(props) {
    super(props);
    this.data = props;
  }

  
  
  
  render() {
    if (this.props.data['data']['data']['stats']['all']['trio'] !== null ) {
      return (
        <div className="statTable">
          Trio:
          <div className="statRow">
            <div className="statTitle">
              Score: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['trio']['score']}
            </div>
          </div>
    
          <div className="statRow">
            <div className="statTitle">
              Score per minute:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['trio']['scorePerMin']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Score per match: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['trio']['scorePerMatch']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Wins: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['trio']['wins']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Top 3: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['trio']['top3']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Top 6: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['trio']['top6']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Kills:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['trio']['kills']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Kills per minute: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['trio']['killsPerMin']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Kills per match: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['trio']['killsPerMatch']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              K/D Ratio: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['trio']['kd']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Matches:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['trio']['matches']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Win rate:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['trio']['winRate']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Minutes played:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['trio']['minutesPlayed']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Players out lived:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['trio']['playersOutlived']}
            </div>
          </div>
        </div>
      )}
    else {
      return null
    }
  }
}
export default TrioBlock; 