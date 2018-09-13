import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { DatePicker, Button } from 'react-md';
import Loader from '../helpers/Loader'

export default class ElibraryReservationDate extends Component {

  render(){
    const { value, onCancelClick, onReserveClick, onDateChange, inProgress, locales  } = this.props;
    console.log('locales',locales)
    let btnPrimaryProps;
    if(inProgress) {
      btnPrimaryProps = {
        onClick:onReserveClick.bind(this),
        raised: true,
        primary: true,
        disabled: true
      }
    }else{
      btnPrimaryProps = {
        onClick:onReserveClick.bind(this),
        raised: true,
        primary: true
      }
    }
    return(
        <div className="flex-center flex-wrap">
        {  inProgress ? <Loader center /> : null}
            <div className="">
              {console.log(value)}
              <DatePicker
                id="reservation-date"
                className="inline-center-picker"
                label={<FormattedMessage 
                  id="elibraryReservationDate.pickReservationDate"
                  defaultMessage="Pick reservation date"
                />}
                firstDayOfWeek={1}
                autoOk
                onChange={onDateChange.bind(this)}
                value={value}
                locales={locales.locale.replace("_", "-")}
                portal
              />
          </div>
          <div className="width-100 text-center">
              <Button onClick={onCancelClick} raised>
                <FormattedMessage 
                  id="elibraryReservationDate.cancel"
                  defaultMessage="Cancel"
                />
              </Button>
              <Button {...btnPrimaryProps}>
              <FormattedMessage 
                id="elibraryReservationDate.reserve"
                defaultMessage="Reserve"
              />
              </Button>
          </div>
      </div>
    )
  }
}
