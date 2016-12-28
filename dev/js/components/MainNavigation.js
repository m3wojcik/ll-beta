import React,{Component} from 'react';
import { render } from 'react-dom';
import { Link, IndexLink  } from 'react-router';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';

const MainNavigation = [
  <IndexLink  key="dashboard" to="/" activeClassName="active-main" >
    <ListItem
      primaryText="Dashboard"
      leftIcon={<FontIcon>home</FontIcon>}
    />
  </IndexLink >,
  <Link key="marks" to="marks" activeClassName="active-main" >
    <ListItem
      primaryText="Marks"
      leftIcon={<FontIcon>assessment</FontIcon>}
    />
</Link>,
  <Link key="attendance" to="attendance" activeClassName="active-main" >
    <ListItem
      primaryText="Attendance"
      leftIcon={<FontIcon>done_all</FontIcon>}
    />
  </Link>,
  <Link key="inbox" to="inbox" activeClassName="active-main" >
      <ListItem
        primaryText="Messages"
        leftIcon={<FontIcon>inbox</FontIcon>}
      />
  </Link>
]
export default MainNavigation;
