import React, { Component } from 'react';

export default class NewsContent extends Component {

  render(){
    const { text } = this.props;
    return(
      <div className="news-content" dangerouslySetInnerHTML={{__html:text}} />
    )
  }
}
NewsContent.propTypes = {
  text: React.PropTypes.string.isRequired
}
