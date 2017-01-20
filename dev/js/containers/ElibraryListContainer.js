import React, { Component } from 'react';
import { connect } from "react-redux";
import Dialog from 'react-md/lib/Dialogs';
import Drawer from 'react-md/lib/Drawers';
import { fetchElibraryList, fetchElibraryDetails, changeElibraryObjectStatus, postReserveElibraryObject, setReserveElibraryObjectId } from "../actions/ElibraryListActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import ElibraryList from '../components/ElibraryList'
import CardWithHeader from '../components/helpers/CardWithHeader'
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
  // componentWillReceiveProps(nextProps){
  //    const { fetched, onLoad } = this.props;
  //    if(fetched != nextProps.fetched){
  //      //onLoad();
  //    }
  // }
  handleReserveBtnClick = (object) => {
    this.setState({
      drawerTitle: "Reservation",
      drawerData: <ElibraryReservationDateContainer onCancelClick={this.closeDrawer} />
    })
    this.props.dispatch(setReserveElibraryObjectId(object.id));
    this.handleDrawerToggle(true);

  }
  handleCancelReservationClick = (object) => {
    this.props.dispatch(changeElibraryObjectStatus(object.id,"available"));
  }
  handleDetailsClick = (object) => {
    this.setState({
      dialogTitle: object.title,
      dialogData: <ElibraryDetailsContainer id={object.id} />
    })
    this.openDialog();

  }
  render(){
    const { fetched, elibraryList, toolbar } = this.props;
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
    let blockBorrowed, blockReserved, blockAvailable, output = [];

    if(borrowedList.length > 0){
      blockBorrowed = {
        borrowed: true,
        onDetailsClick: this.handleDetailsClick,
        searchValue: toolbar.searchValue,
        elibraryList: borrowedList
      }
      output.push(
        <CardWithHeader key="Borrowed" header="Borrowed">
          <ElibraryList {...blockBorrowed} />
        </CardWithHeader>
      )
    }
    if(reservedList.length > 0){
      blockReserved ={
        reserved: true,
        onCancelReservationClick: this.handleCancelReservationClick,
        onDetailsClick: this.handleDetailsClick,
        searchValue: toolbar.searchValue,
        elibraryList: reservedList
      }
      output.push(
        <CardWithHeader key="Reserved" header="Reserved">
          <ElibraryList {...blockReserved} />
        </CardWithHeader>
      )
    }
    if(availableList.length > 0){
      blockAvailable = {
        available: true,
        onReserveClick: this.handleReserveBtnClick,
        onDetailsClick: this.handleDetailsClick,
        searchValue: toolbar.searchValue,
        elibraryList: availableList
      }
      output.push(
        <CardWithHeader key="List" header="List">
          <ElibraryList {...blockAvailable} />
        </CardWithHeader>
      )
    }
    if(!fetched){
      return(
        <div className="content">
          <CircularProgress id="loading-classes" key="loading"  />
        </div>
      )
    }
    return(
        <div className="content-no-padding">
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
        </div>

    )
  }
}
