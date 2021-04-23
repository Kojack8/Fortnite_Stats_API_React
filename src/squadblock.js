import React, { Component } from 'react';
import './statblock.css'

class SquadBlock extends Component {
  constructor(props) {
    super(props);
    this.data = props;
  }

  
  
  
  render() {
    if (this.props.data['data']['data']['stats']['all']['squad'] !== null ) {
      return (
        <div className="statTable">
          <p>Squad:</p>
          <div className="statRow">
            <div className="statTitle">
              Score: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['squad']['score']}
            </div>
          </div>
    
          <div className="statRow">
            <div className="statTitle">
              Score per minute:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['squad']['scorePerMin']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Score per match: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['squad']['scorePerMatch']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Wins: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['squad']['wins']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Top 3: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['squad']['top3']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Top 6: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['squad']['top6']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Kills:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['squad']['kills']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Kills per minute: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['squad']['killsPerMin']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Kills per match: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['squad']['killsPerMatch']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              K/D Ratio: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['squad']['kd']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Matches:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['squad']['matches']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Win rate:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['squad']['winRate']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Minutes played:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['squad']['minutesPlayed']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Players out lived:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['squad']['playersOutlived']}
            </div>
          </div>
        </div>
      )
    }
    else {
      return null
    }
  }
}
export default SquadBlock; 