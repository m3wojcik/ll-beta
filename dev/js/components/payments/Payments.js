import React, { Component } from 'react';

import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import {FormattedRelative} from 'react-intl';
import CustomListItem from './../helpers/CustomListItem';
import CardWithHeader from './../helpers/CardWithHeader'
import PaymentInstallments from './PaymentInstallments'
import PaymentLessons from './PaymentLessons'
import Label from './../helpers/Label'
import MediaLibItemDetails from './../elibrary/MediaLibItemDetails'
import MediaLibItemActions from './../elibrary/MediaLibItemActions'
import {FormattedDate} from 'react-intl';


export default class Payments extends Component {
  render(){
    const { groups } = this.props;
    const mappedGroups = groups.map(function(group){
      let output = null
      if(group.type == "standard"){
        output = (
          <CardWithHeader header={group.name}>
            <PaymentInstallments installments={group.installments} />
          </CardWithHeader>
        )
      }else if(group.type == "hourly"){
        output = (
          <CardWithHeader header={group.name}>
            <PaymentLessons lessons={group.lessons} />
          </CardWithHeader>
        )
      }
      return (
        <li key={group.id}>
          {output}
        </li>
      )
    })
    return(
        <ul className="md-list md-list-divider">
          {mappedGroups}
        </ul>

    )
  }
}
Payments.propTypes = {
  groups: React.PropTypes.array.isRequired
}
