import React, { Component } from 'react';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';

const Loader =({center, full, inline, fullPage, centerPadding}) => {
    let classProps = "loader-container"
    if(center) classProps += " loader-center"
    if(full) classProps += " loader-full"
    if(inline) classProps += " loader-inline"
    if(fullPage) classProps += " loader-full-page"
    if(centerPadding) classProps += " loader-center-padding"
    const balls = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-balls"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect>
        <g transform="rotate(0 50 50)">
          <circle r="5" cx="30" cy="50" transform="translate(2.30328 -3.17019)">
            <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="0.5s" values="0 0;13.819660112501051 -19.02113032590307" keyTimes="0;1"></animateTransform>
            <animate attributeName="fill" dur="0.5s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="#51cacc;#9df871"></animate>
          </circle>
        </g>
        <g transform="rotate(72 50 50)">
          <circle r="5" cx="30" cy="50" transform="translate(2.30328 -3.17019)">
            <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="0.5s" values="0 0;13.819660112501051 -19.02113032590307" keyTimes="0;1"></animateTransform>
            <animate attributeName="fill" dur="0.5s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="#9df871;#e0ff77"></animate>
          </circle>
        </g>
        <g transform="rotate(144 50 50)">
          <circle r="5" cx="30" cy="50" transform="translate(2.30328 -3.17019)">
            <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="0.5s" values="0 0;13.819660112501051 -19.02113032590307" keyTimes="0;1"></animateTransform>
            <animate attributeName="fill" dur="0.5s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="#e0ff77;#de9dd6"></animate>
          </circle>
        </g>
        <g transform="rotate(216 50 50)">
          <circle r="5" cx="30" cy="50" transform="translate(2.30328 -3.17019)">
            <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="0.5s" values="0 0;13.819660112501051 -19.02113032590307" keyTimes="0;1"></animateTransform>
            <animate attributeName="fill" dur="0.5s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="#de9dd6;#ff708e"></animate>
          </circle>
        </g>
        <g transform="rotate(288 50 50)">
          <circle r="5" cx="30" cy="50" transform="translate(2.30328 -3.17019)">
            <animateTransform attributeName="transform" type="translate" begin="0s" repeatCount="indefinite" dur="0.5s" values="0 0;13.819660112501051 -19.02113032590307" keyTimes="0;1"></animateTransform>
            <animate attributeName="fill" dur="0.5s" begin="0s" repeatCount="indefinite" keyTimes="0;1" values="#ff708e;#51cacc"></animate>
          </circle>
        </g>
      </svg>)
    return(
      <div className={classProps}>
        <div className="loader">
          {balls}
        </div>
      </div>
    )
}
export default Loader