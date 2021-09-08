import React from "react";
import "./_fieldgrid.scss";
import { connect, useDispatch } from 'react-redux';
import { activateNew } from '../../../stores/game/fieldSlice'

class FieldGrid extends React.Component {
  render() {
    let fieldElements = [];
    this.props.fields.map((value) => {
      fieldElements[value.id] = <div key={value.id} className={'field ' + (value.active ? '' : 'inactive')}></div>
    })

    return (
      <div className="field-list" onClick={this.props.activateNew}>
        {fieldElements}
      </div>
    );
  }
}
var mapStateToProps = (state) => ({
  fields: state.fields.fields,
 });
 var mapDispatchToProps = {
   activateNew
 }
export default connect(mapStateToProps,mapDispatchToProps)(FieldGrid);
