import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';

export default class ListHorizontal extends Component {

  render(){
    const {elements, space} = this.props;
    const length = elements.length,
          mappedElements = []
    let spaceElement = <li key="bullet" className="bullet"><FontIcon>lens</FontIcon></li>
    if(space == "no-space"){
      spaceElement = null
    }
    elements.forEach(function(element,i){
      if(i + 1 < length){
        mappedElements.push(<li key={i}>{element}</li>);
        if(spaceElement != null) mappedElements.push(spaceElement);
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
