import React from "react";
import GameTitle from "./global/title/title";
import ScoreBoard from "./game/scoreboard/scoreboard";
import FieldGrid from "./game/fieldgrid/fieldgrid";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="row">
          <div className="col-6 centered">
            <GameTitle></GameTitle>
          </div>
        </div>
        <div className="row">
            <div className="col-6 centered">
                <ScoreBoard></ScoreBoard>
            </div>
        </div>
        <div className="row">
            <div className="col-6 centered">
                <FieldGrid></FieldGrid>
            </div>
        </div>
      </div>
    );
  }
}

export default Game;
