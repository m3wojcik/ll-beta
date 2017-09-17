import React from 'react';

const CardWithHeader = ({header, id}) => {

    let props;
    if(id){
      props = {
        id: id
      }
    }
    return(
      <div>
        <div {...props} className="header">{header}</div>
        <div className="content-card">
          {this.props.children}
        </div>
      </div>
    )
}
export default CardWithHeader