import React,{Component} from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router'
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';

const MainNavigation = [
  <Link key="dashboard" to={{pathname:"/"}} activeClassName="active" >
    <ListItem
      primaryText="Dashboard"
      leftIcon={<FontIcon>home</FontIcon>}
    />
  </Link>,
  <Link key="marks" to={{pathname:"/marks"}} activeClassName="active" >
    <ListItem
      primaryText="Marks"
      leftIcon={<FontIcon>map</FontIcon>}
    />
  </Link>
]
export default MainNavigation;
