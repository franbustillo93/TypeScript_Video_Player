import { MediaPlayerClass } from "dashjs";

type VideoPlayerProps = {
        divId: string;
        url: string;
        initialized: boolean;
        player: MediaPlayerClass;
}

interface VideoPlayerControllerProps {
        url: string;
        openContent: (url: string) => void;
        play: () => void;
        pause: () => void;
        seek: (at: Int) => void;
        stop: () => void;
        destroy: () => void;
}