import React from 'react';
import injectTooltip from 'react-md/lib/Tooltips';


const Tooltip = ({children, tooltip }) => {
  const styles = {
    tooltipContainer: {
      position: 'relative'
    },
  };
  
    return(
      <span style={styles.tooltipContainer}>
        {tooltip}
        {children}
      </span>
    )
}
Tooltip.propTypes = {
  children: React.PropTypes.object.isRequired
}
export default injectTooltip(Tooltip)