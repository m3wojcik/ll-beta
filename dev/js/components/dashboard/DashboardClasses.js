import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import FontIcon from 'react-md/lib/FontIcons';
import CustomListItem from '../helpers/CustomListItem';
import CustomDate from '../helpers/CustomDate';
import CardClassDetails from '../CardClassDetails';
import {getWeek} from '../../actions/Functions';

export default class DashboardClasses extends Component {

  render(){
    const { dashboardClasses, fetched } = this.props;
    let output = []
    const mappedClasses = dashboardClasses.map(function(clas){
      return (
        <CustomListItem
          key={clas.id}
          primaryText={clas.name}
          clickable
          status={<CardClassDetails status={clas.status} details={clas.details} />}
          secondaryText={<CustomDate date={clas.date} />}
        />
      )
    })
    if(fetched){
      output.push(<ul key="list" className="md-list md-list-divider">{mappedClasses}</ul>)
    }else{
      output.push(<Loader key="loader" centerPadding />)
    }

    return(
      <Box
        className="no-flex"
        title="Classes"
        titleIcon={<FontIcon className="icon-green">event</FontIcon>}>

        {output}
      </Box>
    )
  }
}
DashboardClasses.propTypes = {
  dashboardClasses: React.PropTypes.array.isRequired,
  fetched: React.PropTypes.bool.isRequired
}
