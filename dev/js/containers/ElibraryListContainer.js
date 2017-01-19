import React, { Component } from 'react';
import { connect } from "react-redux";
import Dialog from 'react-md/lib/Dialogs';
import { fetchElibraryList, fetchElibraryDetails, changeElibraryItemStatus } from "../actions/ElibraryListActions";
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import ElibraryList from '../components/ElibraryList'
import CardWithHeader from '../components/helpers/CardWithHeader'
import ElibraryDetailsContainer from './ElibraryDetailsContainer'

@connect((store) => {
   return {
     toolbar: store.app.toolbar,
     elibraryList: store.elibraryList.elibraryList,
     fetched: store.elibraryList.fetched,
     fetching: store.elibraryList.fetching,
     elibraryDetails: store.elibraryList.elibraryDetails,
     detailsFetching: store.elibraryList.detailsFetching,
     detailsFetched: store.elibraryList.detailsFetched
  };
})
export default class ElibraryListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
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
  componentDidMount(){
    this.props.dispatch(fetchElibraryList());
  }
  // componentWillReceiveProps(nextProps){
  //    const { fetched, onLoad } = this.props;
  //    if(fetched != nextProps.fetched){
  //      //onLoad();
  //    }
  // }
  handleReserveClick = (object) => {
    this.setState({
      dialogTitle: "Reservation",
      dialogData: <ElibraryDetailsContainer id={object.id} />
    })
    this.openDialog();
    this.props.dispatch(changeElibraryItemStatus(object.id,"reserved"));
  }
  handleCancelReservationClick = (object) => {
    this.props.dispatch(changeElibraryItemStatus(object.id,"available"));
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
        onReserveClick: this.handleReserveClick,
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

        </div>

    )
  }
}
