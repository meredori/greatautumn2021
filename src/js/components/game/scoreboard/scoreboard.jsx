import React from 'react';
import './_scoreboard.scss';
import ScoreTicker from '../scoreticker/scoreticker';
import { connect } from 'react-redux';

class ScoreBoard extends React.Component {
    constructor(props){
      super(props);
      const count = useSelector((state) => state.counter.value);
      var dispatch = useDispatch();
    }



    render() {
      return (
      <div className='scoreboard'>
          <div className='block money'><span className='money-label'>Money: </span><ScoreTicker currentScore={count} /></div>
          <div className='block water'><span className='water-label'>Water: </span><ScoreTicker currentScore={0} /></div>
          <div className='block crops'><span className='crops-label'>Crops: </span><ScoreTicker currentScore={0} /></div>                 
      </div>
      );
    }
  }
  mapStateToProps = (state) => ({
    counter: state.counter
   });

   mapDispatchToProps = () => ({ 
    increment, 
    decrement
  });

export default connect(
  mapStateToProps
)(ScoreBoard);