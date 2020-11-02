import React, { Component, createRef } from 'react';
import "./VideoPlayer.css";
import { VideoPlayerProps } from './types';

interface Props {
    videoPlayer: VideoPlayerProps
}

export class VideoPlayer extends Component<Props>{

    videoRef = createRef<HTMLVideoElement>();
    
    render() {

        const openContent = (url: string) => {
            
            let container = this.videoRef.current;

            if(this.props.videoPlayer.initialized){
                
                if(container) {
                    this.props.videoPlayer.player.attachView(container);
                    this.props.videoPlayer.player.attachSource(url);
                }
            }else {

                if(container) {
                    this.props.videoPlayer.player.initialize(container, url, false);
                    this.props.videoPlayer.initialized = true;
                }
            }
        }

        const play = () => {
            this.props.videoPlayer.player.play();
        }

        
        return (
            <div >
                <video 
                    ref={this.videoRef} 
                 />
                <p>{this.props.videoPlayer.url}</p>
                <button onClick={() => openContent(this.props.videoPlayer.url)}> Open Content</button>
                <button onClick={play}>Play</button>
                
            </div>
        )
    
    }

    
}