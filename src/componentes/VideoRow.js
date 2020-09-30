import React from 'react'
import '../css/VideoRow.css'

function VideoRow({ views, subs, description, timestamp, channel, title, image}) {
    return (
        <div className="videoRow">
            <img src={image} alt={channel}/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p>
                    {channel} · {subs} subscriptores · {views} vistas · {timestamp}
                </p>
            </div>
        </div>
    )
}

export default VideoRow