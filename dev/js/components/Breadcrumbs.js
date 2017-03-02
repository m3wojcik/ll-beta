import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import Subheader from 'react-md/lib/Subheaders';

export default class Breadcrumbs extends Component {
  render(){
    const {path, onClick} = this.props;
    const pathLength = path.length;
    const mappedCrumbs = path.map(function(crumb, i){
      let output;
      if(i == 0){
        output = [
          <div className="crumb" key={crumb.id}>
            <div
              className="crumb-link crumb-clickable"
              onClick={onClick.bind(this, crumb.id)}>
              <FontIcon className="crumb-clickable">home</FontIcon>
            </div>
          </div>
        ]
      }else if(i == pathLength - 1){
        output = [
          <div className="crumb" key={crumb.id}>
            <div className="crumb-divider"><FontIcon>keyboard_arrow_right</FontIcon></div>
            <div className="crumb-link text-muted">{crumb.name}</div>
          </div>
        ]
      }else{
        output = [
          <div className="crumb" key={crumb.id}>
            <div className="crumb-divider"><FontIcon>keyboard_arrow_right</FontIcon></div>
            <div className="crumb-link crumb-clickable" onClick={onClick.bind(this, crumb.id)}>{crumb.name}</div>
          </div>
        ]
      }
      return output;
    }.bind(this))
    return(
      <div className="breadcrumbs">
        {mappedCrumbs}
      </div>
    )
  }
}
