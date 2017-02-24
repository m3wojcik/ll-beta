import React, { Component } from 'react';

export default class ListHeader extends Component {

  render(){
    const { header, id } = this.props;
    let props;
    if(id){
      props ={
        id:id
      }
    }
    return(
      <li {...props} className="list-header">{header}</li>
    )
  }
}
ListHeader.propTypes = {
  header: React.PropTypes.oneOfType([
   React.PropTypes.string,
   React.PropTypes.object
 ])
}
