import React, { Component } from 'react';
import SelectField from 'react-md/lib/SelectFields';
export default class FillGapSelect extends Component {

  handleChange=(value) =>{
    this.props.onChange(value, this.props.value);
  }
  render(){
    const { text, menuItems, value, onChange, className, defaultValue } = this.props;
    return(
      <SelectField
        className={className}
        id={"select-" + value}
        value={value}
        defaultValue={defaultValue}
        placeholder="Select"
        menuItems={menuItems}
        onChange={this.handleChange}
        />
    )
  }
}
