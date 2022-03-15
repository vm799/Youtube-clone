import React from 'react'
import "./ChannelRow.css"
import { Avatar } from "@material-ui/core"
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlined"

function ChannelRow( {image, channel, subs, noOfVideos, verified, description }) {
  return (
    <div className= "channelRow">
        <Avatar className ="channelRow__logo" alt="V" 
      src='https://www.ophthalsj.com/assets/images/speakers/vaishali_mehmi.png' 
      />
        <div className= "channelRow__text">
            <h4> 
                {channel} {verified && <VerifiedIcon />}
            </h4>
            <p> {subs} subscribers • {noOfVideos} videos
            </p>
            <p>{description}</p>
        </div>
    </div>

  )
}

export default ChannelRow