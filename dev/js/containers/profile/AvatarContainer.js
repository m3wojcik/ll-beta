import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchAvatar } from "../../actions/ProfileActions";
import Loader from '../../components/helpers/Loader'
import Avatar from '../../components/helpers/Avatar';


@connect((store) => {
   return {
    avatar: store.profile.avatar,
    fetched: store.profile.avatar.fetched,
    fetching: store.profile.avatar.fetching
  };
})
class AvatarContainer extends Component {
  componentDidMount(){
    const {id, avatar } = this.props;
    if(!avatar.avatar)  this.props.dispatch(fetchAvatar({id: id}));
  }
  render(){
    const { w, h, id, fetched, avatar } = this.props;
    if(!fetched){
      return(<Loader full />)
    }
    return(
      <div>
        <Avatar w={w} h={h} src={avatar.avatar} />
      </div>
      
    )
  }
}
export default AvatarContainer