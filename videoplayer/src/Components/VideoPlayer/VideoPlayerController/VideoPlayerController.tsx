import React from 'react';
import { VideoPlayerControllerProps } from '../types';

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