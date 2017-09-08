import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchElibraryReservations, cancelReservation} from "../../actions/ElibraryListActions";
import Loader from '../../components/helpers/Loader'
import ElibraryList from '../../components/elibrary/ElibraryList'
import ListWithHeader from '../../components/helpers/ListWithHeader'

@connect((store) => {
  return {
    toolbar: store.app.toolbar,
    books: store.elibrary.elibraryReservations.books,
    fetched: store.elibrary.elibraryReservations.fetched,
    fetching: store.elibrary.elibraryReservations.fetching
  }
})
export default class ElibraryReservationsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchElibraryReservations());
  }
  handleCancelReservationClick = (object) => {
    this.props.dispatch(cancelReservation({
      id: object.group_id
    }))
  }
  handleDetailsClick = (object) => {}
  render() {
    const {fetched, books, toolbar} = this.props;
    if (!fetched) {
      return (<Loader full/>)
    }
    return (
      <ListWithHeader header="Reservations">
        <ElibraryList
          reserved={true}
          onCancelReservationClick={this.handleCancelReservationClick}
          onDetailsClick={this.handleDetailsClick}
          searchValue={toolbar.searchValue}
          elibraryList={books}/>
      </ListWithHeader>
    )
  }
}
