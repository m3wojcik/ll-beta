import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchElibraryList} from "../../actions/ElibraryListActions";
import Loader from '../../components/helpers/Loader'
import ElibraryList from '../../components/elibrary/ElibraryList'
import ListWithHeader from '../../components/helpers/ListWithHeader'

@connect((store) => {
  return {
    toolbar: store.app.toolbar,
    books: store.elibrary.elibraryList.books,
    fetched: store.elibrary.elibraryList.fetched,
    fetching: store.elibrary.elibraryList.fetching
  }
})
export default class ElibraryListContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchElibraryList());
  }
  render() {
    const {fetched, books, toolbar, onReserveClick, onDetailsClick} = this.props;
    if (!fetched) {
      return (<Loader full/>)
    }
    return (
      <div>
        <ListWithHeader header="List">
          <ElibraryList
            available={true}
            onReserveClick={onReserveClick}
            onDetailsClick={onDetailsClick}
            searchValue={toolbar.searchValue}
            elibraryList={books}/>
        </ListWithHeader>

    </div>
    )
  }
}
