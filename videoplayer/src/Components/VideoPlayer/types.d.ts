import { MediaPlayerClass } from "dashjs";

type VideoPlayerProps = {
        divId: string;
        url: string;
        initialized: boolean;
        player: MediaPlayerClass;
}