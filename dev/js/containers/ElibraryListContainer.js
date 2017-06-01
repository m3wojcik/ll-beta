import React, { Component } from 'react';
import { connect } from "react-redux";
import Dialog from 'react-md/lib/Dialogs';
import Drawer from 'react-md/lib/Drawers';
import { fetchElibraryList, fetchElibraryDetails, postCancelReservationElibraryObject, postReserveElibraryObject, setReserveElibraryObject } from "../actions/ElibraryListActions";
import ElibraryList from '../components/ElibraryList'
import ListWithHeader from '../components/helpers/ListWithHeader'
import Loader from '../components/helpers/Loader'
import Content from '../components/helpers/Content'
import DrawerHeader from '../components/helpers/DrawerHeader'
import DrawerBody from '../components/helpers/DrawerBody'
import ElibraryDetailsContainer from './ElibraryDetailsContainer'
import ElibraryReservationDateContainer from './ElibraryReservationDateContainer'

@connect((store) => {
   return {
     toolbar: store.app.toolbar,
     elibraryList: store.elibraryList.elibraryList,
     fetched: store.elibraryList.fetched,
     fetching: store.elibraryList.fetching,
     elibraryDetails: store.elibraryList.elibraryDetails,
     detailsFetching: store.elibraryList.detailsFetching,
     detailsFetched: store.elibraryList.detailsFetched,
     reservedObject:store.elibraryList.reservedObject
  };
})
export default class ElibraryListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
        drawerVisible: false,
        drawerData: {},
        drawerTitle: "",
      dialogVisible: false,
      dialogTitle: "",
      dialogData: {},
      dialogActions:[
        {
          onClick: this.closeDialog,
          primary: false,
          label: 'Close',
        }
      ]
    }
  }
  closeDialog = () => {
    this.setState({ dialogVisible: false });
  }
  openDialog = () => {
    this.setState({ dialogVisible: true });
  }
  handleDrawerToggle = (visible) => {
    this.setState({ drawerVisible: visible });
  }
  closeDrawer = () => {
    this.setState({ drawerVisible: false });
  }
  componentDidMount(){
    this.props.dispatch(fetchElibraryList());
  }
  handleReserveBtnClick = (object) => {
    this.setState({
      drawerTitle: "Reservation",
      drawerData: <ElibraryReservationDateContainer onCancelClick={this.closeDrawer} />
    })
    this.props.dispatch(setReserveElibraryObject(object));
    this.handleDrawerToggle(true);

  }
  handleCancelReservationClick = (object) => {
    this.props.dispatch(postCancelReservationElibraryObject(object.id,{label: 'Undo', onClick: this.handleUnDoCancelReservation}));
  }
  handleUnDoCancelReservation = () =>{
    const {reservedObject} = this.props
    this.props.dispatch(postReserveElibraryObject(reservedObject.id, reservedObject.dateFrom, reservedObject.dateTo));
  }
  handleDetailsClick = (object) => {
    this.setState({
      dialogTitle: object.title,
      dialogData: <ElibraryDetailsContainer id={object.id} />
    })
    this.openDialog();

  }
  removeToast = () => {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts: toasts });
  }
  render(){
    const { fetched, elibraryList, toolbar, reservedObject } = this.props;
    let availableList = [], borrowedList = [], reservedList = [];
    elibraryList.forEach(function(item){
      if(item.status == "borrowed"){
        borrowedList.push(item);
      }else if(item.status == "reserved"){
        reservedList.push(item);
      }else{
        availableList.push(item);
      }
    });
    let propsBorrowed, propsReserved, propsAvailable, output = [];

    if(borrowedList.length > 0){
      propsBorrowed = {
        borrowed: true,
        onDetailsClick: this.handleDetailsClick,
        searchValue: toolbar.searchValue,
        elibraryList: borrowedList
      }
      output.push(
        <ListWithHeader key="Borrowed" header="Borrowed">
          <ElibraryList {...propsBorrowed} />
        </ListWithHeader>
      )
    }
    if(reservedList.length > 0){
      propsReserved ={
        reserved: true,
        inProgress:reservedObject.posting,
        onCancelReservationClick: this.handleCancelReservationClick,
        onDetailsClick: this.handleDetailsClick,
        searchValue: toolbar.searchValue,
        elibraryList: reservedList
      }
      output.push(
        <ListWithHeader key="Reserved" header="Reserved">
          <ElibraryList {...propsReserved} />
        </ListWithHeader>
      )
    }
    if(availableList.length > 0){
      propsAvailable = {
        available: true,
        onReserveClick: this.handleReserveBtnClick,
        onDetailsClick: this.handleDetailsClick,
        searchValue: toolbar.searchValue,
        elibraryList: availableList
      }
      output.push(
        <ListWithHeader key="List" header="List">
          <ElibraryList {...propsAvailable} />
        </ListWithHeader>
      )
    }
    if(!fetched){
      return(
        <Loader full />
      )
    }
    return(
        <Content noPadding>
          {output}
          <Dialog
          id="simpleDialogExample"
          visible={this.state.dialogVisible}
          title={this.state.dialogTitle}
          focusOnMount={false}
          onHide={this.closeDialog}
          actions={this.state.dialogActions}
        >
          <div>{this.state.dialogData}</div>
        </Dialog>
        <Drawer
          visible={this.state.drawerVisible}
          onVisibilityToggle={this.handleDrawerToggle}
          type={Drawer.DrawerTypes.TEMPORARY}
          header={<DrawerHeader>{this.state.drawerTitle}</DrawerHeader>}
          className="drawer-bottom"
        >
          <DrawerBody>{this.state.drawerData}</DrawerBody>
        </Drawer>
      </Content>

    )
  }
}
