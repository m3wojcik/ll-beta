import React, { Component } from 'react';

export default class Select extends Component {
  constructor(props){
    super(props);
    this.state ={selected: this.props.value};
  }
  clickHandle = (index, value) =>{
    const { onChange } = this.props;
    onChange(index, value)
    this.setState({selected: index})
  }
  render(){
    const { type, objects, value, onChange } = this.props;
    const output = objects.map(function(obj, i){
      let className = "select-obj"
      if(this.state.selected == i) className +=" selected"
      return <div key={i} className={className} onClick={this.clickHandle.bind(this, i, obj.value)}>
        {obj.object}
      </div>
    }.bind(this))
    return(
      <div className="select">{output}</div>
    )
  }
}
