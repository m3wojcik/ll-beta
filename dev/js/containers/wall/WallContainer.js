import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchWall } from "../../actions/WallActions";
import Wall from '../../components/wall/Wall'
import Content from '../../components/helpers/Content'

@connect((store) => {
   return {
     wall: store.wall.wall,
     fetched: store.wall.fetched,
     fetching: store.wall.fetching
  };
})
export default class WallContainer extends Component {
  componentDidMount(){
    const { fetched } = this.props;
    if(!fetched){
      this.props.dispatch(fetchWall());
    }
  }
  render(){
    const { fetched, wall } = this.props;
    return(
      <Wall fetched={fetched} wall={wall} />
      )
  }
}
