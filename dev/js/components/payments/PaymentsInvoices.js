import React, { Component } from 'react';
import { List, ListItem } from 'react-md/lib/Lists';
import Button from 'react-md/lib/Buttons/Button';
import {FormattedDate} from 'react-intl';
import FontIcon from 'react-md/lib/FontIcons';


const PaymentsInvoices = ({ intl, invoices, onDownloadClick } ) => {
  const mappedInvoices = invoices.map(
    invoice =>
        <ListItem 
          key={invoice.id}
          primaryText={invoice.name}
          secondaryText={<FormattedDate value={invoice.date} day="numeric" month="numeric" year="numeric" />}
          rightIcon={
            <FontIcon onClick={onDownloadClick.bind(this, invoice.id)}>vertical_align_bottom</FontIcon>
          }
        />
  )
    return(
      <List>
        {mappedInvoices}
      </List>
    )
}
export default PaymentsInvoices