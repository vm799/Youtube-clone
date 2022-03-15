import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'


function RecommendedVideos() {
 
  return (
    <div className="recommendedvideos">
        <h2>Recommended Videos</h2>
        <div className= "recommendedVideos__videos">
            <VideoCard 
            title= "Become a web dev in 10 mins"
            views= "2.3M Views"
            timestamp="3 days ago"
            channelImage="https://pbs.twimg.com/media/Eqf_1MKXUAI6DgJ.jpg"
            channel="Sonny Sangha"
            image="https://pbs.twimg.com/media/Eqf_1MKXUAI6DgJ.jpg"/>
            <VideoCard 
             title= "Become a web dev in 10 mins"
             views= "2.3M Views"
             timestamp="3 days ago"
             channelImage="https://pbs.twimg.com/media/Eqf_1MKXUAI6DgJ.jpg"
             channel="Sonny Sangha"
             image="https://pbs.twimg.com/media/Eqf_1MKXUAI6DgJ.jpg"/>
            <VideoCard
             title= "Become a web dev in 10 mins"
             views= "2.3M Views"
             timestamp="3 days ago"
             channelImage="https://pbs.twimg.com/media/Eqf_1MKXUAI6DgJ.jpg"
             channel="Sonny Sangha"
             image="https://pbs.twimg.com/media/Eqf_1MKXUAI6DgJ.jpg" />
            <VideoCard 
             title= "Become a web dev in 10 mins"
             views= "2.3M Views"
             timestamp="3 days ago"
             channelImage="https://pbs.twimg.com/media/Eqf_1MKXUAI6DgJ.jpg"
             channel="Sonny Sangha"
             />
            <VideoCard 
             title= "Become a web dev in 10 mins"
             views= "2.3M Views"
             timestamp="3 days ago"
             channelImage="https://pbs.twimg.com/media/Eqf_1MKXUAI6DgJ.jpg"
             channel="Sonny Sangha"
             />
            <VideoCard 
             title= "Become a web dev in 10 mins"
             views= "2.3M Views"
             timestamp="3 days ago"
             channelImage="https://pbs.twimg.com/media/Eqf_1MKXUAI6DgJ.jpg"
             channel="Sonny Sangha"
             />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            </div>
    </div>
  )
}

export default RecommendedVideos