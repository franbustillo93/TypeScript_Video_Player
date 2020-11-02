import React, { Component, createRef } from 'react';
import "./VideoPlayer.css";
import { VideoPlayerProps } from './types';
import {VideoPlayerController} from "./VideoPlayerController/VideoPlayerController";

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

        const stop = () => {
            pause();
            seek(0);
        }

        const destroy = () => {
            this.props.videoPlayer.player.reset();
        }

        
        return (
            <div >
                <video 
                    ref={this.videoRef} 
                 />
                <p>{this.props.videoPlayer.url}</p>
                <VideoPlayerController 
                    url = {this.props.videoPlayer.url}
                    openContent = {openContent}
                    play = {play}
                    pause = {pause}
                    seek = {seek}
                    stop = {stop}
                    destroy = {destroy}
                />
            </div>
        )
    
    }

    
}