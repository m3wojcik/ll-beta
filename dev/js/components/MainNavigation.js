import React,{Component} from 'react';
import { render } from 'react-dom';
import { Link, IndexLink  } from 'react-router';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import { connect } from "react-redux";

@connect((store) => {
  return {
    appData: store.app.appData,
    notifications : store.app.appData.notifications
  };
})
export default class MainNavigation extends Component {
    render(){
      const {appData , notifications} = this.props;
      return(
        <List className="navigation">
        <IndexLink  key="dashboard" to="/" activeClassName="active-main" >
          <ListItem
            primaryText="Dashboard"
            leftIcon={<FontIcon>home</FontIcon>}
          />
        </IndexLink >
        <Link key="marks" to="marks" activeClassName="active-main" >
          <ListItem
            primaryText="Marks"
            leftIcon={<FontIcon>assessment</FontIcon>}
          />
      </Link>
      <Link key="classes" to="classes" activeClassName="active-main" >
          <ListItem
            primaryText="Classes"
            leftIcon={<FontIcon>event</FontIcon>}
          />
      </Link>
        <Link key="attendance" to="attendance" activeClassName="active-main" >
          <ListItem
            primaryText="Attendance"
            leftIcon={<FontIcon>done_all</FontIcon>}
          />
        </Link>
        <Link key="inbox" to="inbox" activeClassName="active-main" >
            <ListItem
              primaryText="Messages"
              leftIcon={<FontIcon>inbox</FontIcon>}
              rightIcon={<div>{notifications.unreadMessages}</div>}
            />
        </Link>
        <Link key="files" to="files" activeClassName="active-main" >
          <ListItem
            primaryText="Files"
            leftIcon={<FontIcon>folder</FontIcon>}
          />
        </Link>
        <Link key="tests" to="tests" activeClassName="active-main" >
          <ListItem
            primaryText="Tests"
            leftIcon={<FontIcon>assignment_turned_in</FontIcon>}
          />
        </Link>
      </List>
    )
  }
}
