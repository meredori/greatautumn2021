import React from 'react';
import './_scoreboard.scss';
import ScoreTicker from '../scoreticker/scoreticker';
import { connect } from 'react-redux';

class ScoreBoard extends React.Component {

   mapDispatchToProps = () => ({ 
    increment, 
    decrement
  });

    render() {
      return (
      <div className='scoreboard'>
          <div className='block money'><span className='money-label'>Money: </span><ScoreTicker currentScore={this.props.money.value} /></div>
          <div className='block water'><span className='water-label'>Water: </span><ScoreTicker currentScore={0} /></div>
          <div className='block harvest'><span className='harvest-label'>Harvest: </span><ScoreTicker currentScore={this.props.harvest.value} /></div>                 
      </div>
      );
    }
  }
  var mapStateToProps = (state) => ({
    harvest: state.harvest,
    money: state.money
   });



export default connect(
  mapStateToProps
)(ScoreBoard);