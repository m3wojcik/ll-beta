import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchElibraryList} from "../../actions/ElibraryListActions";
import Loader from '../../components/helpers/Loader'
import ElibraryList from '../../components/elibrary/ElibraryList'
import ListWithHeader from '../../components/helpers/ListWithHeader'
import Drawer from 'react-md/lib/Drawers';
import DrawerHeader from '../../components/helpers/DrawerHeader'
import DrawerBody from '../../components/helpers/DrawerBody'
import ElibraryReservationDateContainer from './ElibraryReservationDateContainer'

@connect((store) => {
  return {
    toolbar: store.app.toolbar,
    books: store.elibrary.elibraryList.books,
    fetched: store.elibrary.elibraryList.fetched,
    fetching: store.elibrary.elibraryList.fetching
  }
})
export default class ElibraryListContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      drawerVisible: false,
      drawerTitle: "",
      reservedObject: null
    }
  }
  componentDidMount() {
    this.props.dispatch(fetchElibraryList());
  }
  handleReserveBtnClick = (object) => {
    console.log(object);
    this.setState({ reservedObject: object });
    this.handleDrawerToggle(true)
  }
  handleDrawerToggle = (visible) => {
    console.log(visible);
    this.setState({ drawerVisible: visible });
  }
  handleDrawerClose = () => {
    this.handleDrawerToggle(false)
  }
  handleDetailsClick = (object) => {}
  render() {
    const {fetched, books, toolbar} = this.props;
    if (!fetched) {
      return (<Loader full/>)
    }
    return (
      <div>
        <ListWithHeader header="List">
          <ElibraryList
            available={true}
            onReserveClick={this.handleReserveBtnClick}
            onDetailsClick={this.handleDetailsClick}
            searchValue={toolbar.searchValue}
            elibraryList={books}/>
        </ListWithHeader>
        <Drawer
          visible={this.state.drawerVisible}
          onVisibilityToggle={this.handleDrawerToggle}
          type={Drawer.DrawerTypes.TEMPORARY}
          header={<DrawerHeader>Reservation</DrawerHeader>}
          className="drawer-bottom"
          >
          <DrawerBody>
            <ElibraryReservationDateContainer reservedObject={this.state.reservedObject} onCancelClick={this.handleDrawerClose} />
          </DrawerBody>
        </Drawer>
    </div>
    )
  }
}
