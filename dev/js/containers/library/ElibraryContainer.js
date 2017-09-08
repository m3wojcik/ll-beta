import React, { Component } from 'react'
import { connect } from "react-redux"
import Content from '../../components/helpers/Content'
import moment from 'moment';
import { showSnack } from 'react-redux-snackbar'
import {toggleElibraryDrawer, 
        toggleElibraryDialog, 
        setResevedObject, 
        saveReservation,
        setElibraryView } from "../../actions/ElibraryListActions"
import ElibraryListContainer from './ElibraryListContainer'
import ElibraryBookingsContainer from './ElibraryBookingsContainer'
import ElibraryReservationsContainer from './ElibraryReservationsContainer'
import Drawer from 'react-md/lib/Drawers'
import DrawerHeader from '../../components/helpers/DrawerHeader'
import DrawerBody from '../../components/helpers/DrawerBody'
import Dialog from 'react-md/lib/Dialogs'
import ElibraryDetailsContainer from './ElibraryDetailsContainer'
import ElibraryReservationDateContainer from './ElibraryReservationDateContainer'

@connect((store) => {
   return {
     toolbar: store.app.toolbar,
     reservation: store.elibrary.reservation,
     view: store.elibrary.view
  };
})
export default class ElibraryContainer extends Component {
  componentWillReceiveProps(nextProps){
    const {reservation} = this.props
    if(!reservation.saved && nextProps.reservation.saved){
      this.props.dispatch(showSnack('reservation_saved', {label: 'Reservation saved', timeout: 3000}));
    }
    if(!reservation.canceled && nextProps.reservation.canceled){
      this.props.dispatch(showSnack('reservation_canceled', {label: 'Reservation canceled', timeout: 3000}));
    }
  }
  handleDrawerToggle = (visible) => {
    this.props.dispatch(toggleElibraryDrawer(visible))
  }
  handleDrawerClose = () => {
    this.handleDrawerToggle(false)
  }
  handleDialogClose = () => {
    this.handleDialogToggle(false)
  }
  handleDialogToggle = (visible) => {
    this.props.dispatch(toggleElibraryDialog(visible))
  }
  handleReserveDrawerClick = (object) => {
    this.props.dispatch(setResevedObject(object))
    this.handleDrawerToggle(true)
  }
  handleDetailsClick = (object) => {
    console.log(object);
    this.props.dispatch(setElibraryView({
      dialogVisible: true,
      dialogTitle: object.title,
      dialogData: <ElibraryDetailsContainer id={object.id} />
    }))
    //this.handleDialogToggle(true)
  }
  handleReserveClick = () => {
    const {reservation} = this.props
    const dateFrom = moment(reservation.dateFrom).format("Y-MM-DD")
    this.props.dispatch(saveReservation({
      id: reservation.reservedObject.id,
      date_from: dateFrom
    }))
  }
  render(){
    const {view, reservation} = this.props
    return(
      <Content noPadding>
        <ElibraryBookingsContainer />
        <ElibraryReservationsContainer />
        <ElibraryListContainer
          onReserveClick={this.handleReserveDrawerClick}
          onDetailsClick={this.handleDetailsClick}
        />
        <Drawer
          visible={view.drawerVisible}
          onVisibilityToggle={this.handleDrawerToggle}
          type={Drawer.DrawerTypes.TEMPORARY}
          header={<DrawerHeader>Reservation</DrawerHeader>}
          className="drawer-bottom"
          >
          <DrawerBody>
            <ElibraryReservationDateContainer
              onReserveClick={this.handleReserveClick}
              onCancelClick={this.handleDrawerClose}
            />
          </DrawerBody>
        </Drawer>
        <Dialog
            id="elibraryBookDetailDialog"
            visible={view.dialogVisible}
            title={view.dialogTitle}
            focusOnMount={false}
            onHide={this.handleDialogClose}
            actions={[{
              onClick: this.handleDialogClose,
              primary: false,
              label: 'Close',
            }]}
          >
            <div>{view.dialogData}</div>
          </Dialog>
      </Content>
    )
  }
}
