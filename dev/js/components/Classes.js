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
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';
import {getWeek} from '../actions/Functions'

export default class Classes extends Component {
  render(){
    const { classes, headers } = this.props;
    const today = new Date();
    //getWeek(today) == getWeek(clas.date) ? <div>tak</div> : <div>nie</div>)
    const mappedClasses = classes.map(
      clas =>
      <li key={clas.id}>

        <Card
          onClick={this.props.onCardClick.bind(this,clas.id, clas.name)}
          className={clas.active ? 'clickable active': 'clickable inactive'} >
          <CardTitle
            title={<CustomCardTitle left={<FormattedRelative value={clas.date}/>} right={<FormattedDate value={clas.date} day="numeric" month="long" year="numeric" />} />}
            subtitle={<div><FormattedTime value={clas.date} /> - <FormattedTime value={(new Date(clas.date)).getTime() + (clas.length * 1000 * 60) }  /></div>}
            />
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
