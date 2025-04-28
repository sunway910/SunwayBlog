import React from 'react'

const YoutubeEmbed = ({embedId}) => (
    <div className="video-responsive">
        <iframe
            src={`https://www.youtube.com/embed/${embedId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            width="560"
            height="315"
        />
    </div>
)

export default YoutubeEmbed

