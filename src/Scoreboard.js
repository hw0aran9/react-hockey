import React, { Component } from "react";
import "./Scoreboard.css"

class Scoreboard extends React.Component {
  constructor() {
    super();
    this.state = {
      score_player   : 3,
      score_opponent : 2
    }
  }
  render() {
    return (
      <div className="ScoreboardWrapper">
        <div className="Scoreboard">
          {this.state.score_player} : {this.state.score_opponent}
        </div>
      </div>
    )
  }
}
export default Scoreboard;
