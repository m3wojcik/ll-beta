import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import {FormattedDate, FormattedRelative} from 'react-intl';
import Box from '../helpers/Box';
import TabPaneTitle from '../helpers/TabPaneTitle';
import CustomListItem from '../helpers/CustomListItem';
import Label from '../helpers/Label';
import StudentHistoryGroupDetails from './StudentHistoryGroupDetails';
import StudentHistoryGroupNotes from './StudentHistoryGroupNotes';
import Alert from '../helpers/Alert';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  tests: {
    id: 'studentHistory.tests',
    defaultMessage: 'Tests'
  },
  noTestsHistory: {
    id: 'studentHistory.noTestsHistory',
    defaultMessage: 'No tests history'
  },
  groups: {
    id: 'studentHistory.groups',
    defaultMessage: 'Groups'
  },
  noGroupsHistory: {
    id: 'studentHistory.noGroupsHistory',
    defaultMessage: 'No groups history'
  }
})

const StudentHistory = ({ intl, studentHistory })=> {
  let mappedTests = <Alert  text={intl.formatMessage(messages.noTestsHistory)} type="info"/>, 
      mappedGroups = <Alert  text={intl.formatMessage(messages.noGroupsHistory)} type="info"/>
  if(studentHistory.tests){
    mappedTests = studentHistory.tests.map(
      (test, i) =>
      <CustomListItem 
        key={i} 
        primaryText={test.name}
        status={<Label label={test.score} blue/>} 
      />
    )
  }
  if(studentHistory.groups){
    mappedGroups = studentHistory.groups.map(
      (group, i) =>
      <Box 
        key={i} 
        title={group.name}
        subtitle={<span><FormattedDate value={group.startDate} day="numeric" month="numeric" year="numeric" /> - <FormattedDate value={group.endDate} day="numeric" month="numeric" year="numeric" /></span>} 
      >
        <StudentHistoryGroupDetails group={group} />
        <StudentHistoryGroupNotes group={group} />
      </Box>
    )
  }
  
  return(
    <div>
      <TabPaneTitle
        title={intl.formatMessage(messages.tests)} 
        titleIcon={<FontIcon className="icon-red">assignment_turned_in</FontIcon>}
      />
      <ul className="md-list md-list-divider">
        {mappedTests}
      </ul>
      <hr />
      <TabPaneTitle
        title={intl.formatMessage(messages.groups)} 
        titleIcon={<FontIcon className="icon-green">event</FontIcon>}
      />
      <ul className="md-list md-list-divider">
        {mappedGroups}
      </ul>
    </div>
  )
    
}
export default injectIntl(StudentHistory)