import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import CardActions from 'react-md/lib/Cards/CardActions';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import CustomCardTitle from './CustomCardTitle';
import CardClassDetails from './CardClassDetails';
import { Link } from 'react-router'
import {push} from 'react-router-redux';
import { connect } from "react-redux";

@connect((store) => {
   return {
    routing: store.routing,
    toolbar: store.app.toolbar,
    tabs: store.app.tabs,
    page: store.app.page
  };
})
export default class Classes extends Component {
    constructor(props) {
    super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(classId){
        this.props.dispatch(push('classDetails/'+classId));
    }
  render(){
    const { classes } = this.props;
    const mappedClasses = classes.map(
      clas =>
      <li key={clas.id} onClick={this.handleClick.bind(this,clas.id)}>
        <Card className={clas.active ? 'active': 'inactive'} >
          <CardTitle title={<CustomCardTitle left={clas.weekday} right={clas.date} />} subtitle={clas.startTime + ' - ' +clas.endTime}   />
          <CardClassDetails status={clas.status} details={clas.details} />
          <List className="md-divider-border md-divider-border--top">
            <ListItem disabled primaryText={clas.name} leftIcon={<FontIcon>event</FontIcon>} />
            <ListItem disabled primaryText={clas.teacher} leftIcon={<FontIcon>face</FontIcon>}  />
            <ListItem disabled primaryText={clas.room} leftIcon={<FontIcon>place</FontIcon>}  />
          </List>
        </Card>
      </li>
    );
    return(
      <ul className="clean-list">
        {mappedClasses}
      </ul>
    )
  }
}
