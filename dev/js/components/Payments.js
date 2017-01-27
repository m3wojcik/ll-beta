import React, { Component } from 'react';

import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import FontIcon from 'react-md/lib/FontIcons';
import {FormattedRelative} from 'react-intl';
import CustomListItem from './helpers/CustomListItem';
import CardWithHeader from '../components/helpers/CardWithHeader'
import PaymentInstallments from '../components/PaymentInstallments'
import Label from './helpers/Label'
import MediaLibItemDetails from './MediaLibItemDetails'
import MediaLibItemActions from './MediaLibItemActions'
import {FormattedDate} from 'react-intl';


export default class Payments extends Component {
  render(){
    const { groups } = this.props;
    const mappedGroups = groups.map(function(group){
      return (
        <li key={group.id}>
          <CardWithHeader header={group.name}>
            <PaymentInstallments installments={group.installments} />
          </CardWithHeader>
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
