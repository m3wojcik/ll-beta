import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';

export default class ListHorizontal extends Component {

  render(){
    const {elements} = this.props;
    const length = elements.length;
    const mappedElements = []
    elements.forEach(function(element,i){
      if(i + 1 < length){
        mappedElements.push(<li key={i}>{element}</li>);
        mappedElements.push(<li key="bullet" className="bullet"><FontIcon>lens</FontIcon></li>);
      }else{
        mappedElements.push(<li key={i}>{element}</li>);
      }
    })

    return(
      <ul className="list-horizontal list-with-bullets">
        {mappedElements}
      </ul>
    )
  }
}
