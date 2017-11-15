import React from 'react';

const BoxTitle = ({title, titleIcon, className}) => {
    let  titleOutput = []
    let classProps = "";
    if(className){
      classProps += " "+className;
    }

    return(
      <div key="title" className={classProps}>
        <div class="box-title">{titleIcon ? titleIcon : null}{title}</div>
      </div>
    )
  }
BoxTitle.propTypes = {
  className: React.PropTypes.string,
}
export default BoxTitle