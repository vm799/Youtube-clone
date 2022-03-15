import React from 'react'
import './SearchPage.css'
import TuneIcon from "@material-ui/icons/Tune"
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
  return (
    <div className="searchpage">
       <div className="searchpage__filter">
       <TuneIcon />
          <h3>FILTER</h3>
          </div>
          <hr />
          <div className="searchpage__channelrow">

          <ChannelRow 
          image= "https://pbs.twimg.com/media/Eqf_1MKXUAI6DgJ.jpg"
          channel="Clever Programmer"
          verified = "true"
          subs="650k"
          noOfVideos={382}
          description="You can find some awesome programming data"
           />
        </div>
        <hr />
        <VideoRow 
        views= "1.4M"
        subs="659K"
        description="Do you want a free course on javascript mastery>" 
        timestamp= "38 seconds ago"
        channel= "Clever Programmer"
        title="Let's build a youtube clone with REACT JS"
        image="https://pbs.twimg.com/media/Eqf_1MKXUAI6DgJ.jpg"
        />

<VideoRow 
        views= "1.4M"
        subs="659K"
        description="Do you want a free course on javascript mastery>" 
        timestamp= "38 seconds ago"
        channel= "Clever Programmer"
        title="Let's build a youtube clone with REACT JS"
        image="https://pbs.twimg.com/media/Eqf_1MKXUAI6DgJ.jpg"
        />

<VideoRow 
        views= "1.4M"
        subs="659K"
        description="Do you want a free course on javascript mastery>" 
        timestamp= "38 seconds ago"
        channel= "Clever Programmer"
        title="Let's build a youtube clone with REACT JS"
        image="https://pbs.twimg.com/media/Eqf_1MKXUAI6DgJ.jpg"
        />
      </div>
  )
}

export default SearchPage