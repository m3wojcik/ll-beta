import React from 'react';

const DrawerHeader = ({children, className}) => {

    let classProps = "drawer-header";
    if(className){
        classProps += " "+{className}
    }
    return(
      <div className={classProps}>
        {children}
      </div>
    )
}
export default DrawerHeader 