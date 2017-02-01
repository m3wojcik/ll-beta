import React, { Component } from 'react';
import CustomListItem from './helpers/CustomListItem';
import ElibraryListStatus from './ElibraryListStatus'

export default class MediaList extends Component {
  render(){
    const { media } = this.props;
    const mappedMedia = media.map(
      (item , i) =>
      <CustomListItem
        key={i}
        primaryText={item.title}
        status = {<ElibraryListStatus item={item} />}
        secondaryText={item.author}
      />
    );
    return(
      <ul key="list" className="md-list md-list-divider">
        {mappedMedia}
      </ul>
    )
  }
}
