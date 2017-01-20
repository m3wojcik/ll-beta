import React, { Component } from 'react';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';
import Button from 'react-md/lib/Buttons/Button';

export default class ElibraryReservationDate extends Component {

  render(){
     const { value, onCancelClick, onReserveClick, onDateChange } = this.props;
    return(
        <div className="flex-center flex-wrap">
            <div className="">
              <DatePicker
                id="reservation-date"
                className="inline-center-picker"
                label="Pick reservation date"
                autoOk
                onChange={onDateChange.bind(this)}
                value={value}
                className=""
              />
          </div>
          <div className="width-100 text-center">
              <Button onClick={onCancelClick} raised label="Cancel" />
              <Button onClick={onReserveClick.bind(this)} primary raised label="Reserve" />
          </div>
      </div>
    )
  }
}
