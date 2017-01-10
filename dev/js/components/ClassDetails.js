import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import CustomCardTitle from './CustomCardTitle';
import CardClassDetails from './CardClassDetails';

export default class ClassDetails extends Component {
  render(){
     const { clas } = this.props;
     const mappedClass = (
       clas ?
      <li key={clas.id}>
        <div className={clas.active ? 'class active': 'class inactive'}>
          <div className="class-header">
              <CardTitle title={<CustomCardTitle left={clas.weekday} right={clas.date} />} subtitle={clas.startTime + ' - ' +clas.endTime}   />
              <CardClassDetails status={clas.status} details={clas.details} />
        </div>
        <Card className={clas.active ? 'active': 'inactive'}>


          <List className="md-divider-border md-divider-border--top">
            <ListItem disabled primaryText={clas.name} leftIcon={<FontIcon>event</FontIcon>} />
            <ListItem disabled primaryText={clas.teacher} leftIcon={<FontIcon>face</FontIcon>}  />
            <ListItem disabled primaryText={clas.room} leftIcon={<FontIcon>place</FontIcon>}  />
          </List>
        </Card>
      </div>
      </li>
      : null
    );
    return(
      <ul className="clean-list">
        {mappedClass}
      </ul>
    )
  }
}
