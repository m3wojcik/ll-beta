import React, { Component } from 'react';
import { connect } from "react-redux";
import {push} from 'react-router-redux';
import Content from '../components/helpers/Content'
import DashboardWelcome from '../components/dashboard/DashboardWelcome'
import DashboardClassesContainer from './classes/DashboardClassesContainer'
import WallContainer from './wall/WallContainer'
import Drawer from 'react-md/lib/Drawers'
import DrawerHeader from './../components/helpers/DrawerHeader'
import DrawerBody from './../components/helpers/DrawerBody'
import SurveyDashboardDrawer from './../components/surveys/SurveyDashboardDrawer'
import {toggleSurveyDrawer} from '../actions/WallActions'

@connect((store) => {
  return {
    appData: store.app.appData,
    fetched: store.app.appData.fetched,
    survey: store.wall.survey,
    view: store.wall.view
  };
})
export default class DashboardContainer extends Component {
  componentWillReceiveProps(nextProps){
    const {survey} = this.props
    console.warn(survey, nextProps.survey)
    if(!survey.id && nextProps.survey.id){
      this.handleDrawerToggle(true)
    }
  }
  handleFillOut = (path) =>{
    this.props.dispatch(push(path))
  }
  handleDrawerToggle = (visible) => {
    this.props.dispatch(toggleSurveyDrawer(visible))
  }
  handleDrawerClose = () => {
    this.handleDrawerToggle(false)
  }
  render(){
    const { appData, notifications, survey, view } = this.props;
    return(
      <Content>
        <DashboardWelcome appData={appData} />
        <DashboardClassesContainer />
        <div className="md-grid md-row">
          <div className="md-cell md-cell--12 md-cell--12-tablet md-cell--12-phone">
            <WallContainer />
          </div>
        </div>
        <Drawer
          visible={view.drawerVisible}
          onVisibilityToggle={this.handleDrawerToggle}
          type={Drawer.DrawerTypes.TEMPORARY}
          header={<DrawerHeader>New survey</DrawerHeader>}
          className="drawer-bottom"
          >
          <DrawerBody>
            <SurveyDashboardDrawer survey={survey} onFillOutClick={this.handleFillOut} />
          </DrawerBody>
        </Drawer>
      </Content>
    )
  }
}
