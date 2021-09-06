import React from 'react';
import './_scoreticker.scss';

class ScoreTicker extends React.Component {
    render() {
      return (
      <span className="score">{this.props.currentScore.toLocaleString('en', {useGrouping:true})}</span>
      );
    }
  }

export default ScoreTicker;