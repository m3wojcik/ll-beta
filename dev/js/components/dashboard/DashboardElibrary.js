import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import FontIcon from 'react-md/lib/FontIcons';
import MediaList from './../elibrary/MediaList'
import BoxSubtitle from './../helpers/BoxSubtitle'
import {getWeek} from '../../actions/Functions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';
export default class DashboardElibrary extends Component {

  render(){
    const { dashboardElibrary, fetched } = this.props;
    let borrowedList = [], reservedList = [], output = [];
    dashboardElibrary.forEach(function(item){
      if(item.status == "borrowed"){
        borrowedList.push(item);
      }else if(item.status == "reserved"){
        reservedList.push(item);
      }
    });

    if(!fetched){
      output.push(<Loader key="loader" centerPadding />)
    }else{
      if(borrowedList.length > 0){
        output.push(
          <div key="borrowedList">
            <BoxSubtitle text="Borrowed" />
            <MediaList media={borrowedList} />
          </div>
        )
      }
      if(reservedList.length > 0){
        output.push(
          <div key="reservedList">
            <BoxSubtitle text="Reserved" />
            <MediaList media={reservedList} />
          </div>
        )
      }
    }

    return(
      <Box
        className="no-flex no-padding"
        title="Elibrary"
        titleIcon={<FontIcon className="icon-violet">library_books</FontIcon>}>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {output}
        </ReactCSSTransitionGroup>

      </Box>
    )
  }
}
DashboardElibrary.propTypes = {
  dashboardElibrary: React.PropTypes.array.isRequired,
  fetched: React.PropTypes.bool.isRequired
}
