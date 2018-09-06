import React, { Component } from 'react';
import { List, ListItem } from 'react-md/lib/Lists';
import {FormattedDate} from 'react-intl';
import FontIcon from 'react-md/lib/FontIcons';


const PaymentsInvoices = ({ invoices, onDownloadClick, locales } ) => {
  const mappedInvoices = invoices.map(
    invoice =>
        <ListItem 
          key={invoice.id}
          primaryText={invoice.number}
          secondaryText={
            <ul className="notification-header">
              <li><FormattedDate value={invoice.date} day="numeric" month="long" year="numeric" /></li>
              <li key="bullet2" className="bullet"><FontIcon>lens</FontIcon></li>
              <li key="timestamp" className="timestamp md-text--secondary">{invoice.total_gross +" "+ locales.currencyCode}</li>
            </ul>
            
          }
          leftIcon={<FontIcon>description</FontIcon>}
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