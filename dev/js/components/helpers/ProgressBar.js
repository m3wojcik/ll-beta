import React from 'react';

const ProgressBar = ({ value , title, subtitle }) => {
    const progressSubtitle = (
      subtitle ?
        <div className="progress-subtitle">{subtitle}</div> : null
    )
    const progressTitle = (
      title ?
        <div className="progress-title">{title}</div> : null
    )
    return(
      <div className="progress-container">
        {progressSubtitle}
        {progressTitle}
        <div className="indicating progress-bar" data-percent={value}>
          <div className="bar" style={{width: value + '%'}}>
          </div>
          {value}
        </div>
      </div>

    )
}
export default ProgressBar