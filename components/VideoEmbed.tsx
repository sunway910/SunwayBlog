// https://r2.sunway.run/GEM_hengyang/喜欢你.MOV
import React from 'react'

interface VideoProps {
    src: string
    title?: string
    width?: string | number
    height?: string | number
    poster?: string
    className?: string
    autoPlay?: boolean
    muted?: boolean
    loop?: boolean
    controls?: boolean

    [key: string]: any // allow others HTML video
}

const VideoEmbed: React.FC<VideoProps> = ({
                                         src,
                                         title,
                                         width = '100%',
                                         height = 'auto',
                                         poster,
                                         className = '',
                                         autoPlay = false,
                                         muted = false,
                                         loop = false,
                                         controls = true,
                                         ...props
                                     }) => {
    const getVideoType = (url: string) => {
        const extension = url.split('.').pop()?.toLowerCase()

        switch (extension) {
            case 'mp4':
                return 'video/mp4'
            case 'mov':
                return 'video/quicktime'
            case 'webm':
                return 'video/webm'
            case 'ogg':
                return 'video/ogg'
            case 'avi':
                return 'video/x-msvideo'
            case 'wmv':
                return 'video/x-ms-wmv'
            case 'm4v':
                return 'video/x-m4v'
            case 'mkv':
                return 'video/x-matroska'
            default:
                return 'video/mp4'
        }
    }

    return (
        <div className={`relative overflow-hidden my-4 rounded-lg ${className}`}>
            <video
                className="w-full"
                controls={controls}
                width={width}
                height={height}
                preload="metadata"
                title={title || ''}
                poster={poster}
                autoPlay={autoPlay}
                muted={muted}
                loop={loop}
                playsInline
                {...props}
            >
                <source src={src} type={getVideoType(src)}/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default VideoEmbed