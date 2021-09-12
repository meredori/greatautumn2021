import React from "react";
import "./_fieldgrid.scss";
import { connect, useDispatch } from 'react-redux';
import { activateNew, growCrop } from '../../../stores/game/fieldSlice'

class FieldGrid extends React.Component {
  render() {
    let fieldElements = [];
    this.props.fields.map((value) => {
      fieldElements[value.id] = <div key={value.id} className={'field ' + (value.active ? '' : 'inactive')} onClick={() => {this.props.growCrop(value)}}></div>
    })

    return (
      <div className="field-list">
        {fieldElements}
      </div>
    );
  }
}
var mapStateToProps = (state) => ({
  fields: state.fields.fields,
 });
 var mapDispatchToProps = {
   activateNew,
   growCrop
 }
export default connect(mapStateToProps,mapDispatchToProps)(FieldGrid);
