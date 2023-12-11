import React from "react";

const BilibiliEmbed = ({src}) => (
    <div className="video-responsive">
        <iframe
            src={`${src}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded Bilibili"
        ></iframe>
    </div>
)
export default BilibiliEmbed