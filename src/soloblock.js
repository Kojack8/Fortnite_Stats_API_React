import React, { Component } from 'react';
import './statblock.css'

class SoloBlock extends Component {
  constructor(props) {
    super(props);
    this.data = props;
  }

  
  
  
  render() {
    if (this.props.data['data']['data']['stats']['all']['solo'] !== null ) {
      return (
        <div className="statTable">
          Solo:
          <div className="statRow">
            <div className="statTitle">
              Score: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['solo']['score']}
            </div>
          </div>
    
          <div className="statRow">
            <div className="statTitle">
              Score per minute:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['solo']['scorePerMin']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Score per match: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['solo']['scorePerMatch']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Wins: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['solo']['wins']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Top 10: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['solo']['top10']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Top 25: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['solo']['top25']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Kills:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['solo']['kills']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Kills per minute: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['solo']['killsPerMin']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Kills per match: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['solo']['killsPerMatch']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              K/D Ratio: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['solo']['kd']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Matches:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['solo']['matches']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Win rate:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['solo']['winRate']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Minutes played:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['solo']['minutesPlayed']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Players out lived:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['solo']['playersOutlived']}
            </div>
          </div>
        </div>
      )}
    else {
      return null
    }
  }
}
export default SoloBlock; 