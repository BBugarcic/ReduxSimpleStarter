import React, { Component } from 'react';
import VideoItem from './video_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return(
      <VideoItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />
    )}
  );

  return(
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  );
}

export default VideoList;
