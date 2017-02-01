import React, { Component } from 'react';
import Loader from '../helpers/Loader'
import Box from '../helpers/Box';
import FontIcon from 'react-md/lib/FontIcons';
import Label from '../helpers/Label';
import CustomListItem from '../helpers/CustomListItem';
import TestInfo from '../helpers/TestInfo';
import ActionsRow from '../helpers/ActionsRow'
import Button from 'react-md/lib/Buttons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {FormattedDate, FormattedTime, FormattedRelative} from 'react-intl';
export default class DashboardTests extends Component {

  render(){
    const { dashboardTests, fetched, onSolveClick } = this.props;
    let output = []
    const mappedTests = dashboardTests.map(function(test){
        return (
          <CustomListItem
            clickable
            key={test.id}
            primaryText={test.name}
            expander={
              <div>
                <TestInfo test={test} />
                <ActionsRow>
                  <Button primary flat label="Solve"
                      onClick={onSolveClick.bind(this, test)}
                    />
                </ActionsRow>
              </div>
            }
            secondaryText={<FormattedDate value={test.shareDate} day="numeric" month="numeric" year="numeric" />}
          />
      )
    })
    if(!fetched){
      output.push(<Loader key="loader" centerPadding />)
    }else{
      output.push(<ul key="tests" className="md-list md-list-divider">
      {mappedTests}</ul>)
    }

    return(
      <Box
        className="no-flex no-padding"
        title="New tests"
        titleIcon={<FontIcon className="icon-red">assignment_turned_in</FontIcon>}>
        <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {output}
        </ReactCSSTransitionGroup>

      </Box>
    )
  }
}
DashboardTests.propTypes = {
  dashboardTests: React.PropTypes.array.isRequired,
  fetched: React.PropTypes.bool.isRequired
}
