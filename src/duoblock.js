import React, { Component } from 'react';
import './statblock.css'

class DuoBlock extends Component {
  constructor(props) {
    super(props);
    this.data = props;
  }

  
  
  
  render() {
    if (this.props.data['data']['data']['stats']['all']['duo'] !== null ) {
      return (
        <div className="statTable">
          Duo:
          <div className="statRow">
            <div className="statTitle">
              Score: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['duo']['score']}
            </div>
          </div>
    
          <div className="statRow">
            <div className="statTitle">
              Score per minute:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['duo']['scorePerMin']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Score per match: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['duo']['scorePerMatch']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Wins: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['duo']['wins']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Top 5: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['duo']['top5']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Top 12: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['duo']['top12']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Kills:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['duo']['kills']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Kills per minute: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['duo']['killsPerMin']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Kills per match: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['duo']['killsPerMatch']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              K/D Ratio: 
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['duo']['kd']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Matches:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['duo']['matches']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Win rate:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['duo']['winRate']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Minutes played:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['duo']['minutesPlayed']}
            </div>
          </div>

          <div className="statRow">
            <div className="statTitle">
              Players out lived:
              </div>
            <div className="statValue">
              {this.props.data['data']['data']['stats']['all']['duo']['playersOutlived']}
            </div>
          </div>
        </div>
        
      )}
    else {
      return null
    }
  }
}
export default DuoBlock; 