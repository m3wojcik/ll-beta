import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { getDays } from '../../actions/Functions';
import Label from '../helpers/Label';

export default class ElibraryListStatus extends Component {

  render(){
    const { item, reserved, available, borrowed  } = this.props;
    let status;
    if(available){
        status = <Label blue label={item.quantity_available} value={item.quantity_available} colorValues={[{"values":[1],"color": "red"}, {"range":[2,3],"color": "orange"}]} />
    }else if(reserved){
      let label;
      const today = getDays(new Date());
      const dateFrom = getDays(new Date(item.date_from));
      const dateTo= getDays(new Date(item.date_to));
      if(today < dateFrom ){
        let dayDifference = dateFrom - today;
        label = <Label blue
          label={<FormattedMessage 
            id="elibraryListStatus.pickReservationInXdays"
            defaultMessage="Pick reservation in {days} days!"
            values={{
              days: dayDifference
            }}
          />}
          value={dayDifference}
          colorValues={[{"values":[1],"color": "olive"}]}
          />
      }else if(dateFrom <= today && today < dateTo){
        let dayDifference = dateTo - today
        let text = "Pick reservation";
        label = [<Label key="pick-reservation" green label={text} />,
      <Label key="days-left" green
        label={[dayDifference + " days left"]}
        value={dayDifference}
        colorValues={[{"values":[1],"color": "red"},{"range":[2,3],"color": "orange"}]} />
          ]
      }else if(today == dateTo){
        label = <Label red 
        label={<FormattedMessage 
          id="elibraryListStatus.lastDayToPickReservation"
          defaultMessage="Last day to pick reservation"
        />}
        />
      }else if(today > dateTo){
        label = <Label red 
        label={<FormattedMessage 
          id="elibraryListStatus.reservationIsOutdated"
          defaultMessage="Reservation is outdated" 
        />}
        />
      }
        status = label;
    }else if(borrowed){
      let label;
      const today = getDays(new Date());
      const dateFrom = getDays(new Date(item.from));
      const dateReturn= getDays(new Date(item.to));
      if(today < dateReturn){
        let dayDifference = dateReturn - today;
        label = <Label blue
            label={["Return in " + dayDifference + " days"]}
          value={dayDifference}
          colorValues={[{"range":[1,2],"color": "orange"}]} />
      }else if(today == dateReturn){
          label = <Label red 
          label={<FormattedMessage 
            id="elibraryListStatus.returnToday"
            defaultMessage="Return today" 
          />}
          />
      }else if(today > dateReturn){
          label = <Label red 
          label={<FormattedMessage 
            id="elibraryListStatus.borrowingIsOutdated"
            defaultMessage="Borrowing is outdated" 
          />}
          />
      }
        status = label
    }
    return(<span>{status}</span>)
  }
}
