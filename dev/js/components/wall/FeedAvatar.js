import React from 'react';


const FeedAvatar = ({name}) =>{
  const nameArray = name.split(" ")
  let nameOutput = nameArray[0].charAt(0)
  if(nameArray.length > 1){
    nameOutput += nameArray[1].charAt(0)
  }
  return(
      <div className="feed-avatar">
        {nameOutput}
      </div>
  )
}
FeedAvatar.propTypes = {
  name: React.PropTypes.string.isRequired
}
export default FeedAvatar