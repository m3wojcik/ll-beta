import React, { Component } from 'react';

import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import {FormattedRelative} from 'react-intl';
import CustomListItem from './helpers/CustomListItem';

import MediaLibItemDetails from './MediaLibItemDetails'
import MediaLibItemActions from './MediaLibItemActions'
import ElibraryListStatus from './ElibraryListStatus'

import {FormattedDate} from 'react-intl';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ElibraryList extends Component {
  render(){
    const { elibraryList, searchValue, onReserveClick, onDetailsClick, onCancelReservationClick, available, borrowed, reserved, inProgress } = this.props;
    const mappedElibraryList = elibraryList.map(function(item){
    const expander =  <div>
                      <MediaLibItemDetails item={item} />
                        <MediaLibItemActions
                          item={item}
                          available={available}
                          reserved={reserved}
                          inProgress={inProgress}
                          onReserveClick={onReserveClick}
                          onCancelReservationClick={onCancelReservationClick}
                          onDetailsClick={onDetailsClick}
                          />
                    </div>
      let title = item.title.toLowerCase();
      let author = item.author.toLowerCase();
      let search = searchValue.toLowerCase();

      if(title.indexOf(search) != -1 || author.indexOf(search) != -1 ){
        return (
            <CustomListItem
              key={item.id}
              clickable
              expander={expander}
              primaryText={item.title}
              status = {<ElibraryListStatus item={item} />}
              secondaryText={item.author}
            />
        )
      }
    }.bind(this));
    return(
      <ul className="md-list md-list-divider">
        <ReactCSSTransitionGroup transitionName="fade-list" transitionEnterTimeout={500} transitionLeaveTimeout={500} >
          {mappedElibraryList}
        </ReactCSSTransitionGroup>
      </ul>
    )
  }
}
ElibraryList.propTypes = {
  elibraryList: React.PropTypes.array.isRequired,
  onDetailsClick: React.PropTypes.func.isRequired,
  searchValue: React.PropTypes.string,
  onReserveClick: React.PropTypes.func,
  onCancelReservationClick: React.PropTypes.func,
  available: React.PropTypes.bool,
  borrowed: React.PropTypes.bool,
  reserved: React.PropTypes.bool
}
