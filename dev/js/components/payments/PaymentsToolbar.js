import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import {injectIntl, formatMessage, defineMessages} from 'react-intl';


const messages = defineMessages({
  invoices: {
    id: 'paymentsToolbar.invoices',
    defaultMessage: "invoices"
  }
})

const PaymentsToolbar = ({ intl, onInvoicesClick } ) => {
    return(
      <ul className="card-list">
        <li>
          <Button flat primary swapTheming iconEl={<FontIcon>description</FontIcon>} onClick={onInvoicesClick}>
            {intl.formatMessage(messages.invoices)}
          </Button>
        </li>
      </ul>
    )
}
export default injectIntl(PaymentsToolbar)