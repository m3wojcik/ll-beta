import React,{Component} from 'react';
import { render } from 'react-dom';
import { Link, IndexLink  } from 'react-router';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import { connect } from "react-redux";
import Label from './helpers/Label';

@connect((store) => {
  return {
    appData: store.app.appData,
    notifications : store.app.appData.notifications
  };
})
export default class MainNavigation extends Component {
    render(){
      const {appData , notifications} = this.props;
      let messages, tests, files;
      //MESSAGES
      if(notifications.unreadMessages && notifications.unreadMessages > 0){
        messages = <ListItem
          primaryText="Messages"
          leftIcon={<FontIcon className="icon-yellow">inbox</FontIcon>}
          rightIcon={<Label red label={notifications.unreadMessages} />}
        />
      }else{
        messages = <ListItem
          primaryText="Messages"
          leftIcon={<FontIcon className="icon-yellow">inbox</FontIcon>}
        />
      }
      //TESTS
      if(notifications.newTest && notifications.newTest > 0){
        tests = <ListItem
          primaryText="Tests"
          leftIcon={<FontIcon className="icon-red">assignment_turned_in</FontIcon>}
          rightIcon={<Label red label={notifications.newTest} />}
        />
      }else{
        tests = <ListItem
          primaryText="Tests"
          leftIcon={<FontIcon className="icon-red">assignment_turned_in</FontIcon>}
        />
      }
      //FILES
      if(notifications.newFiles && notifications.newFiles > 0){
        files = <ListItem
          primaryText="Files"
          leftIcon={<FontIcon className="icon-orange">folder</FontIcon>}
          rightIcon={<Label red label={notifications.newFiles} />}
        />
      }else{
        files = <ListItem
          primaryText="Files"
          leftIcon={<FontIcon className="icon-orange">folder</FontIcon>}
        />
      }
      return(
        <List className="navigation">
        <IndexLink  key="dashboard" to="/" activeClassName="active-main" >
          <ListItem
            primaryText="Dashboard"
            leftIcon={<FontIcon className="icon-blue">home</FontIcon>}
          />
        </IndexLink >
        <Link key="marks" to="marks" activeClassName="active-main" >
          <ListItem
            primaryText="Marks"
            leftIcon={<FontIcon className="icon-teal">assessment</FontIcon>}
          />
      </Link>
      <Link key="classes" to="classes" activeClassName="active-main" >
          <ListItem
            primaryText="Classes"
            leftIcon={<FontIcon className="icon-green">event</FontIcon>}
          />
      </Link>
        <Link key="attendance" to="attendance" activeClassName="active-main" >
          <ListItem
            primaryText="Attendance"
            leftIcon={<FontIcon className="icon-olive">done_all</FontIcon>}
          />
        </Link>
        <Link key="inbox" to="inbox" activeClassName="active-main" >
          {messages}
        </Link>
        <Link key="files" to="files" activeClassName="active-main" >
          {files}
        </Link>
        <Link key="tests" to="tests" activeClassName="active-main" >
          {tests}
        </Link>
        <Link key="elibrary" to="elibrary" activeClassName="active-main" >
          <ListItem
            primaryText="E-library"
            leftIcon={<FontIcon className="icon-violet">library_books</FontIcon>}
          />
        </Link>
      </List>
    )
  }
}
