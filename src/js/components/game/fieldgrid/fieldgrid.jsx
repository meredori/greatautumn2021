import React from "react";
import "./_fieldgrid.scss";

class FieldGrid extends React.Component {
  render() {
    let fields = [];
    for (let index = 0; index < 64; index++) {
        fields[index] = (<div></div>);       
    }
    return (
      <div className="field-list">
        {fields}
      </div>
    );
  }
}

export default FieldGrid;
