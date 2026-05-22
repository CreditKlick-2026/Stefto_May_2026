import React, { createContext, useContext, useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const VideoPlayerContext = createContext(null);

export const VideoPlayer = ({ children, className, style, ...props }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);

    // Sync state with HTML5 video events
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleTimeUpdate = () => setCurrentTime(video.currentTime);
        const handleDurationChange = () => setDuration(video.duration || 0);
        const handleVolumeChange = () => {
            setVolume(video.volume);
            setIsMuted(video.muted);
        };

        video.addEventListener("play", handlePlay);
        video.addEventListener("pause", handlePause);
        video.addEventListener("timeupdate", handleTimeUpdate);
        video.addEventListener("durationchange", handleDurationChange);
        video.addEventListener("volumechange", handleVolumeChange);

        // Initial duration if cached
        if (video.duration) setDuration(video.duration);

        return () => {
            video.removeEventListener("play", handlePlay);
            video.removeEventListener("pause", handlePause);
            video.removeEventListener("timeupdate", handleTimeUpdate);
            video.removeEventListener("durationchange", handleDurationChange);
            video.removeEventListener("volumechange", handleVolumeChange);
        };
    }, []);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play().catch(() => {});
        }
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    const handleSeek = (time) => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = time;
        setCurrentTime(time);
    };

    const handleVolumeSeek = (vol) => {
        if (!videoRef.current) return;
        videoRef.current.volume = vol;
        setVolume(vol);
        if (vol > 0 && isMuted) {
            videoRef.current.muted = false;
            setIsMuted(false);
        }
    };

    // Find the video element inside children or let the user pass it
    // To support `slot="media"` mapping, we can clone it and attach our ref!
    const updatedChildren = React.Children.map(children, (child) => {
        if (!child) return null;
        if (child.type === "video" || child.props?.slot === "media") {
            return React.cloneElement(child, {
                ref: videoRef,
                onClick: togglePlay,
            });
        }
        return child;
    });

    return (
        <VideoPlayerContext.Provider
            value={{
                videoRef,
                isPlaying,
                currentTime,
                duration,
                volume,
                isMuted,
                togglePlay,
                toggleMute,
                handleSeek,
                handleVolumeSeek,
            }}
        >
            <div className={cn("relative group/player overflow-hidden flex flex-col justify-end bg-black", className)} style={style} {...props}>
                {updatedChildren}
            </div>
        </VideoPlayerContext.Provider>
    );
};

export const VideoPlayerControlBar = ({ children, className, style, ...props }) => {
    return (
        <div
            className={cn(
                "absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-4 py-3 flex items-center gap-3 transition-opacity duration-300 opacity-0 group-hover/player:opacity-100 z-50",
                className
            )}
            style={style}
            {...props}
        >
            {children}
        </div>
    );
};

export const VideoPlayerPlayButton = ({ className, ...props }) => {
    const { isPlaying, togglePlay } = useContext(VideoPlayerContext);
    return (
        <button
            onClick={togglePlay}
            className={cn("text-white hover:text-emerald-400 transition-colors p-1.5 focus:outline-none cursor-pointer", className)}
            {...props}
        >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
        </button>
    );
};

export const VideoPlayerTimeRange = ({ className, ...props }) => {
    const { currentTime, duration, handleSeek } = useContext(VideoPlayerContext);
    const percent = duration > 0 ? (currentTime / duration) * 100 : 0;

    return (
        <div className={cn("flex-1 flex items-center mx-2 cursor-pointer h-5 group/range relative", className)} {...props}>
            <input
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={(e) => handleSeek(parseFloat(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all focus:outline-none"
                style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${percent}%, rgba(255,255,255,0.2) ${percent}%, rgba(255,255,255,0.2) 100%)`
                }}
            />
        </div>
    );
};

const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

export const VideoPlayerTimeDisplay = ({ className, showDuration = true, ...props }) => {
    const { currentTime, duration } = useContext(VideoPlayerContext);
    return (
        <div className={cn("text-xs text-white/95 font-medium select-none whitespace-nowrap min-w-[60px]", className)} {...props}>
            {formatTime(currentTime)}
            {showDuration && ` / ${formatTime(duration)}`}
        </div>
    );
};

export const VideoPlayerMuteButton = ({ className, ...props }) => {
    const { isMuted, toggleMute } = useContext(VideoPlayerContext);
    return (
        <button
            onClick={toggleMute}
            className={cn("text-white hover:text-emerald-400 transition-colors p-1.5 focus:outline-none cursor-pointer", className)}
            {...props}
        >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
    );
};

export const VideoPlayerVolumeRange = ({ className, ...props }) => {
    const { volume, isMuted, handleVolumeSeek } = useContext(VideoPlayerContext);
    const currentVol = isMuted ? 0 : volume;
    const percent = currentVol * 100;

    return (
        <div className={cn("w-16 sm:w-20 flex items-center cursor-pointer h-5 relative group/vol", className)} {...props}>
            <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={currentVol}
                onChange={(e) => handleVolumeSeek(parseFloat(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all focus:outline-none"
                style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${percent}%, rgba(255,255,255,0.2) ${percent}%, rgba(255,255,255,0.2) 100%)`
                }}
            />
        </div>
    );
};

export const VideoPlayerContent = ({ className, ...props }) => {
    return <video className={cn("w-full h-full object-cover", className)} {...props} />;
};
