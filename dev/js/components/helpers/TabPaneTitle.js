import React from 'react';

const TabPaneTitle = ({title, titleIcon, className}) => {
    let  titleOutput = []
    let classProps = "tab-pane-title";
    if(className){
      classProps += " "+className;
    }

    return(
        <div className={classProps}>{titleIcon ? titleIcon : null}{title}</div>
    )
  }
TabPaneTitle.propTypes = {
  className: React.PropTypes.string,
}
export default TabPaneTitle