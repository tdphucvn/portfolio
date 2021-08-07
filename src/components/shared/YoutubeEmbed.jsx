import React from 'react';  
import '../../css/video.css';

const YoutubeEmbed = ({videoURL}) => {
    return (
        <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${videoURL}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    )
};

export default YoutubeEmbed;
