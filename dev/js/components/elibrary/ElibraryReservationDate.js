import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Loader from '../helpers/Loader'

export default class ElibraryReservationDate extends Component {

  render(){
    const { value, onCancelClick, onReserveClick, onDateChange, inProgress } = this.props;

    let btnPrimaryProps;
    if(inProgress) {
      btnPrimaryProps = {
        onClick:onReserveClick.bind(this),
        raised: true,
        primary: true,
        disabled: true,
        label: <FormattedMessage 
          id="elibraryReservationDate.reserve"
          defaultMessage="Reserve"
        />
      }
    }else{
      btnPrimaryProps = {
        onClick:onReserveClick.bind(this),
        raised: true,
        primary: true,
        label: <FormattedMessage 
          id="elibraryReservationDate.reserve"
          defaultMessage="Reserve"
        />
      }
    }
    return(
        <div className="flex-center flex-wrap">
        {  inProgress ? <Loader center /> : null}
            <div className="">
              <DatePicker
                id="reservation-date"
                className="inline-center-picker"
                label={<FormattedMessage 
                  id="elibraryReservationDate.pickReservationDate"
                  defaultMessage="Pick reservation date"
                />}
                autoOk
                onChange={onDateChange.bind(this)}
                value={value}
                className=""
              />
          </div>
          <div className="width-100 text-center">
              <Button onClick={onCancelClick} raised>
                <FormattedMessage 
                  id="elibraryReservationDate.cancel"
                  defaultMessage="Cancel"
                />
              </Button>
              <Button {...btnPrimaryProps} />
          </div>
      </div>
    )
  }
}
