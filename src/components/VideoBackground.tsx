import React, { useRef, useEffect, useState } from 'react';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4';

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;

    const monitor = () => {
      if (!video.duration || video.paused) {
        rafId = requestAnimationFrame(monitor);
        return;
      }

      const { currentTime, duration } = video;
      const fadeTime = 0.5;

      if (currentTime < fadeTime) {
        setOpacity(currentTime / fadeTime);
      } else if (currentTime > duration - fadeTime) {
        setOpacity((duration - currentTime) / fadeTime);
      } else {
        setOpacity(1);
      }

      rafId = requestAnimationFrame(monitor);
    };

    const handleEnded = () => {
      setOpacity(0);
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
      }, 100);
    };

    video.addEventListener('ended', handleEnded);
    video.play().catch(() => {});
    rafId = requestAnimationFrame(monitor);

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div
      className="fixed z-0"
      style={{ top: '300px', inset: 'auto 0 0 0', position: 'fixed' }}
    >
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ opacity, transition: 'opacity 0.1s linear' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
};

export default VideoBackground;
