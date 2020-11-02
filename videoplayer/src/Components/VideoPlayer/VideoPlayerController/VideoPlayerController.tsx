import React from 'react';

interface VideoPlayerControllerProps {
    url: string;
    openContent: (url: string) => void;
    play: () => void;
    pause: () => void;
    seek: (at: number) => void;
    stop: () => void;
    destroy: () => void;
}

export const VideoPlayerController:  React.FC<VideoPlayerControllerProps> = (videoPlayerController) => {
    return (
        <div>
            <button onClick={() => videoPlayerController.openContent(videoPlayerController.url)}> Open Content</button>
            <button onClick={videoPlayerController.play}>Play</button>
            <button onClick={videoPlayerController.pause}>Pause</button>
            <button onClick={() => videoPlayerController.seek(15)}>Seek</button>
            <button onClick={videoPlayerController.stop}>Stop</button>
            <button onClick={videoPlayerController.destroy}>Destroy</button>
        </div>
    )
}