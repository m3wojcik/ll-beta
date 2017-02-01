import React, { Component } from 'react';
import { getDays } from '../actions/Functions';
import Label from './helpers/Label';
import { FormattedPlural } from 'react-intl';

export default class ElibraryListStatus extends Component {

  render(){
    const { item } = this.props;
    let status;
    if(item.status == "available"){
        status = <Label blue label={item.availableUnits} value={item.availableUnits} colorValues={[{"values":[1],"color": "red"}, {"range":[2,3],"color": "orange"}]} />
    }else if(item.status == "reserved"){
      let label;
      const today = getDays(new Date());
      const dateFrom = getDays(new Date(item.dateFrom));
      const dateTo= getDays(new Date(item.dateTo));
      if(today < dateFrom ){
        let dayDifference = dateFrom - today;
        label = <Label blue
          label={text}
          label={["Pick reservation in " + dayDifference + " ", <FormattedPlural key="plural" value={dayDifference} one='day' other='days' />]}
          value={dayDifference}
          colorValues={[{"values":[1],"color": "olive"}]}
          />
      }else if(dateFrom <= today && today < dateTo){
        let dayDifference = dateTo - today
        let text = "Pick reservation";
        label = [<Label key="pick-reservation" green label={text} />,
      <Label key="days-left" green
        label={[dayDifference + " ", <FormattedPlural key="plural" value={dayDifference} one='day' other='days' />," left"]}
        value={dayDifference}
        colorValues={[{"values":[1],"color": "red"},{"range":[2,3],"color": "orange"}]} />
          ]
      }else if(today == dateTo){
        label = <Label red label="Last day to pick reservation" />
      }else if(today > dateTo){
        label = <Label red label="Reservation is outdated" />
      }
        status = label;
    }else if(item.status == "borrowed"){
      let label;
      const today = getDays(new Date());
      const dateFrom = getDays(new Date(item.dateFrom));
      const dateReturn= getDays(new Date(item.dateReturn));
      if(today < dateReturn){
        let dayDifference = dateReturn - today;
        label = <Label blue
            label={["Return in " + dayDifference + " ", <FormattedPlural key="plural" value={dayDifference} one='day' other='days' />]}
          value={dayDifference}
          colorValues={[{"range":[1,2],"color": "orange"}]} />
      }else if(today == dateReturn){
          label = <Label red label="Return today" />
      }else if(today > dateReturn){
          label = <Label red label="Borrowing is outdated" />
      }
        status = label
    }
    return(<span>{status}</span>)
  }
}
