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
import Header from '../helpers/Header';
import Box from '../helpers/Box';
import BoxTitle from '../helpers/BoxTitle';
import MediaLibItemDetails from './../elibrary/MediaLibItemDetails'
import MediaLibItemActions from './../elibrary/MediaLibItemActions'
import {injectIntl, formatMessage, defineMessages} from 'react-intl';

const messages = defineMessages({
  details: {
    id: 'payments.details',
    defaultMessage: "Details"
  }
})

const Payments = ({ intl, groups } ) => {
    const mappedGroups = groups.map(function(group){
      let output = null
      if(group.type == "standard"){
        return (
          <li key={group.id}>
          <Header header={group.name}  />
          <Box className="no-flex no-padding">
            <PaymentInstallments installments={group.installments} />
          </Box>
          </li>
        )
      }else if(group.type == "hourly"){
        return (
          <li key={group.id}>
          <Header header={group.name} />
          <Box className="no-flex no-padding">
            <BoxTitle
              title={intl.formatMessage(messages.details)}
              titleIcon={<FontIcon className="icon-olive">equalizer</FontIcon>}
            />
            <PaymentLessons lessons={group.lessons} />
          </Box>
          </li>
        )
      }
    })
    return(
        <ul className="clean-list">
          {mappedGroups}
        </ul>

    )
}
Payments.propTypes = {
  groups: React.PropTypes.array.isRequired
}
export default injectIntl(Payments)
