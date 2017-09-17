import React from 'react';

const Header = ({header}) => {

    return(
      <h3 className="content-header">{header}</h3>
    )
}
Header.propTypes = {
  header: React.PropTypes.string.isRequired
}
export default Header
