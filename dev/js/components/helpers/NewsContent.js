import React from 'react';

const NewsContent = ({ text }) => {

    return(
      <div className="news-content" dangerouslySetInnerHTML={{__html:text}} />
    )
}
NewsContent.propTypes = {
  text: React.PropTypes.string.isRequired
}
export default NewsContent