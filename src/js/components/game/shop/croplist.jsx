import React from 'react';
import './_croplist.scss';

class CropList extends React.Component {
    render() {
      return (
          <div className="crop-list">
            <div className="button1">Plant Potato</div>
            <div className="score">1</div>
            <div className="score">1</div>
            <div className="score">1</div>
          </div>

      );
    }
  }

export default CropList;