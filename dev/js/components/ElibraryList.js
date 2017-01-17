import React, { Component } from 'react';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import {FormattedRelative} from 'react-intl';
import { Card } from 'semantic-ui-react'

export default class ElibraryList extends Component {
  render(){
    const { elibraryList, searchValue } = this.props;
    const mappedElibraryList = elibraryList.map(function(item){
      let title = item.title.toLowerCase();
      let author = item.author.toLowerCase();
      let search = searchValue.toLowerCase();
      if(title.indexOf(search) != -1 || author.indexOf(search) != -1 ){
        return (
          <ListItem key={item.id}
            rightIcon={<div>sds</div>}
            primaryText={item.title}
            secondaryText={item.author}
          />
        )
      }
    });
    return(
      <List className="">
        {mappedElibraryList}
      </List>
    )
  }
}
