import React from 'react';
import './_scoreboard.scss';
import ScoreTicker from '../scoreticker/scoreticker';

class ScoreBoard extends React.Component {
    render() {
      return (
      <div className='scoreboard'>
          <div className='block money'><span className='money-label'>Money: </span><ScoreTicker currentScore={0} /></div>
          <div className='block water'><span className='water-label'>Water: </span><ScoreTicker currentScore={0} /></div>
          <div className='block crops'><span className='crops-label'>Crops: </span><ScoreTicker currentScore={0} /></div>                 
      </div>
      );
    }
  }

export default ScoreBoard;