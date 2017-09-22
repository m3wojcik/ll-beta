import React, { Component } from 'react';

const ToolbarExpanderList = ({ list }) => {

    const mappedList = list.map(
      (item, i) =>
        <li key={i}>
          {item}
        </li>
    )
    return(
      <ul className="card-list">
        {mappedList}
      </ul>
    )
}
ToolbarExpanderList.propTypes = {
  list: React.PropTypes.array.isRequired
}
export default ToolbarExpanderList