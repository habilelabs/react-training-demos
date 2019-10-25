import React from 'react';
function TableRow(props) {

  return <React.Fragment>
      <td style={{color: props.stocked === false?'red':'inherit'}}>{props.text}</td>
  </React.Fragment>;
}
export default TableRow;