import React,{Component} from 'react';
import { connect } from "react-redux";
import { Link, IndexLink  } from 'react-router';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import { FormattedMessage } from 'react-intl';

import {fetchMenuNofitications} from '../actions/AppActions'

import Label from './helpers/Label';

@connect((store) => {
  return {
    appData: store.app.appData,
    menu: store.app.menu,
    notifications : store.app.appData
  };
})
export default class MainNavigation extends Component {
    componentDidMount(){
      this.props.dispatch(fetchMenuNofitications({type: "messages"}));
    }
    render(){
      const {appData , notifications, menu} = this.props;
      let attendanceProps, marksProps, messagesProps, testsProps, filesProps, elibraryProps, surveysProps, paymentsProps;
      //ATENDANCE
      if(notifications.newAttendance && notifications.newAttendance > 0){
        attendanceProps = {
          rightIcon: <Label red label={notifications.newAttendance} />
        }
      }
      //MARKS
      if(notifications.newMarks && notifications.newMarks > 0){
        marksProps = {
          rightIcon: <Label red label={notifications.newMarks} />
        }
      }
      //MESSAGES
      if(menu.messages && menu.messages.new > 0){
        messagesProps = {
          rightIcon: <Label red label={menu.messages.new} />
        }
      }
      //FILES
      if(notifications.newFiles && notifications.newFiles > 0){
        filesProps = {
          rightIcon: <Label red label={notifications.newFiles} />
        }
      }
      //TESTS
      if(notifications.newTests && notifications.newTests > 0){
        testsProps = {
          rightIcon: <Label red label={notifications.newTests} />
        }
      }
      //E-LIBRARY
      if(notifications.newLibrary && notifications.newLibrary > 0){
        elibraryProps = {
          rightIcon: <Label red label={notifications.newLibrary} />
        }
      }
      //SURVEYS
      if(notifications.newSurveys && notifications.newSurveys > 0){
        surveysProps = {
          rightIcon: <Label red label={notifications.newSurveys} />
        }
      }
      //PAYMENTS
      if(notifications.newPayments && notifications.newPayments > 0){
        paymentsProps = {
          rightIcon: <Label red label={notifications.newPayments} />
        }
      }
      return(
      <List className="navigation">
        <IndexLink  key="dashboard" to="/" activeClassName="active-main" >
          <ListItem
            primaryText={
              <FormattedMessage 
                id="mainNavigation.dashboard"
                defaultMessage="Dashboard"
              />}
            leftIcon={<FontIcon className="icon-blue">home</FontIcon>}
          />
        </IndexLink >
        <Link key="marks" to="marks" activeClassName="active-main" >
          <ListItem
            {...marksProps}
            primaryText={
              <FormattedMessage 
                id="mainNavigation.marks"
                defaultMessage="Marks"
              />}
            leftIcon={<FontIcon className="icon-teal">assessment</FontIcon>}
          />
      </Link>
      <Link key="classes" to="classes" activeClassName="active-main" >
          <ListItem
          primaryText={
              <FormattedMessage 
                id="mainNavigation.classes"
                defaultMessage="Classes"
              />}
            leftIcon={<FontIcon className="icon-green">event</FontIcon>}
          />
      </Link>
        <Link key="attendance" to="attendance" activeClassName="active-main" >
          <ListItem
            {...attendanceProps}
            primaryText={
              <FormattedMessage 
                id="mainNavigation.attendance"
                defaultMessage="Attendance"
              />}
            leftIcon={<FontIcon className="icon-olive">done_all</FontIcon>}
          />
        </Link>
        <Link key="inbox" to="inbox" activeClassName="active-main" >
          <ListItem
            {...messagesProps}
            primaryText={
              <FormattedMessage 
                id="mainNavigation.messages"
                defaultMessage="Messages"
              />}
            leftIcon={<FontIcon className="icon-yellow">inbox</FontIcon>}
          />
        </Link>
        <Link key="files" to="files" activeClassName="active-main" >
          <ListItem
            {...filesProps}
            primaryText={
              <FormattedMessage 
                id="mainNavigation.files"
                defaultMessage="Files"
              />}
            leftIcon={<FontIcon className="icon-orange">folder</FontIcon>}
          />
        </Link>
        <Link key="tests" to="tests" activeClassName="active-main" >
          <ListItem
            {...testsProps}
            primaryText={
              <FormattedMessage 
                id="mainNavigation.tests"
                defaultMessage="Tests"
              />}
            leftIcon={<FontIcon className="icon-red">assignment_turned_in</FontIcon>}
          />
        </Link>
        <Link key="elibrary" to="elibrary" activeClassName="active-main" >
          <ListItem
            {...elibraryProps}
            primaryText={
              <FormattedMessage 
                id="mainNavigation.elibrary"
                defaultMessage="E-library"
              />}
            leftIcon={<FontIcon className="icon-violet">library_books</FontIcon>}
          />
        </Link>
        <Link key="surveys" to="surveys" activeClassName="active-main" >
          <ListItem
            {...surveysProps}
            primaryText={
              <FormattedMessage 
                id="mainNavigation.surveys"
                defaultMessage="Surveys"
              />}
            leftIcon={<FontIcon className="icon-brown">speaker_notes</FontIcon>}
          />
        </Link>
        <Link key="payments" to="payments" activeClassName="active-main" >
          <ListItem
            {...paymentsProps}
            primaryText={
              <FormattedMessage 
                id="mainNavigation.payments"
                defaultMessage="Payments"
              />}
            leftIcon={<FontIcon className="icon-grey">payment</FontIcon>}
          />
        </Link>
      </List>
    )
  }
}
