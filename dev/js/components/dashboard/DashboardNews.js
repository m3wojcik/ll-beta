import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import FontIcon from 'react-md/lib/FontIcons';
import BoxSubtitle from './../helpers/BoxSubtitle'
import CustomListItem from './../helpers/CustomListItem';
import NewsContent from './../helpers/NewsContent';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';
export default class DashboardNews extends Component {

  render(){
    const { dashboardNews, fetched } = this.props;
    let output = []
    const mappedNews = dashboardNews.map(function(news){
        return (
          <CustomListItem
            key={news.id}
            primaryText={news.title}
            expander={<NewsContent text={news.content} />}
            secondaryText={<FormattedDate value={news.date} day="numeric" month="numeric" year="numeric" />}
          />
      )
    })
    if(fetched){
      output.push(<ul key="news" className="md-list list-dividers list-white">{mappedNews}</ul>)
    }else{
      output.push(<Loader key="loader" centerPadding />)
    }

    return(
      <Box
        className="no-flex no-padding"
        title="News"
        titleIcon={<FontIcon className="icon-blue">notifications</FontIcon>}>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {output}
        </ReactCSSTransitionGroup>
      </Box>
    )
  }
}
DashboardNews.propTypes = {
  dashboardNews: React.PropTypes.array.isRequired,
  fetched: React.PropTypes.bool.isRequired
}
