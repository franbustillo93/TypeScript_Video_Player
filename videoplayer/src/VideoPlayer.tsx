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

        const pause = () => {
            this.props.videoPlayer.player.pause();
        }

        const seek = (at: number) => {

            let limitTime =  this.props.videoPlayer.player.duration();
        
            if(at <= limitTime) {
                this.props.videoPlayer.player.seek(at);
            }
        }

        
        return (
            <div >
                <video 
                    ref={this.videoRef} 
                 />
                <p>{this.props.videoPlayer.url}</p>
                <button onClick={() => openContent(this.props.videoPlayer.url)}> Open Content</button>
                <button onClick={play}>Play</button>
                <button onClick={pause}>Pause</button>
                <button onClick={() => seek(5)}>Seek</button>
                
            </div>
        )
    
    }

    
}