import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import FontIcon from 'react-md/lib/FontIcons';
import Label from '../helpers/Label';
import CustomListItem from '../helpers/CustomListItem';
import TestInfo from '../tests/TestInfo';
import ActionsRow from '../helpers/ActionsRow'
import Button from 'react-md/lib/Buttons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';
export default class DashboardSurveys extends Component {

  render(){
    const { dashboardSurveys, fetched, onSolveClick } = this.props;
    let output = []
    const mappedSurveys = dashboardSurveys.map(function(survey){
        return (
          <CustomListItem
            clickable
            key={survey.id}
            primaryText={survey.name}
            expander={
              <div>
                <TestInfo test={survey} />
                <ActionsRow>
                  <Button primary flat label="Fill out survey"
                      onClick={onSolveClick.bind(this, survey)}
                    />
                </ActionsRow>
              </div>
            }
            secondaryText={<FormattedDate value={survey.shareDate} day="numeric" month="numeric" year="numeric" />}
          />
      )
    })
    if(!fetched){
      output.push(<Loader key="loader" centerPadding />)
    }else{
      output.push(<ul key="surveys" className="md-list md-list-divider">
      {mappedSurveys}</ul>)
    }

    return(
      <Box
        className="no-flex no-padding"
        title="New surveys"
        titleIcon={<FontIcon className="icon-brown">speaker_notes</FontIcon>}>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {output}
        </ReactCSSTransitionGroup>

      </Box>
    )
  }
}
DashboardSurveys.propTypes = {
  dashboardSurveys: React.PropTypes.array.isRequired,
  fetched: React.PropTypes.bool.isRequired
}
