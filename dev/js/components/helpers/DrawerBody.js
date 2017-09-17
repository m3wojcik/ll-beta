import React from 'react';

const DrawerBody = ({children, className}) => {

    let classProps = "drawer-body";
    if(className){
        classProps += " "+{className}
    }
    return(
      <div className={classProps}>
        {children}
      </div>
    )
}
export default DrawerBody