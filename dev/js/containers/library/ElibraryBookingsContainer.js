import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchElibraryBookings} from "../../actions/ElibraryListActions";
import Loader from '../../components/helpers/Loader'
import ElibraryList from '../../components/elibrary/ElibraryList'
import ListWithHeader from '../../components/helpers/ListWithHeader'

@connect((store) => {
  return {
    toolbar: store.app.toolbar,
    books: store.elibrary.elibraryBookings.books,
    fetched: store.elibrary.elibraryBookings.fetched,
    fetching: store.elibrary.elibraryBookings.fetching
  }
})
export default class ElibraryBookingsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchElibraryBookings());
  }
  handleReserveBtnClick = (object) => {}
  handleDetailsClick = (object) => {}
  render() {
    const {fetched, books, toolbar} = this.props;
    if (!fetched) {
      return (<Loader full/>)
    }else if(books.length > 0){
      return (
        <ListWithHeader  header="Rented">
          <ElibraryList
            borrowed={true}
            onReserveClick={this.handleReserveBtnClick}
            onDetailsClick={this.handleDetailsClick}
            searchValue={toolbar.searchValue}
            elibraryList={books}/>
        </ListWithHeader>
      )
    }else{
      return null
    }
    
  }
}
