import React, { Component } from 'react';
export default class classDetailsRow extends Component {

  render(){
    const { icon, data } = this.props;
    return(
      <div className="detail-row" key="teacher">
        <div className="detail-row-icon">
          {icon}
        </div>
        <div className="detail-row-data">
          {data}
        </div>  
      </div>
    )
  }
}
classDetailsRow.propTypes = {
  icon: React.PropTypes.object.isRequired
}
