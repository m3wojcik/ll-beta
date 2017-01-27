import React, { Component } from 'react';

export default class ToolbarExpanderList extends Component {

  render(){
    const { list } = this.props;
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
}
ToolbarExpanderList.propTypes = {
  list: React.PropTypes.array.isRequired
}
