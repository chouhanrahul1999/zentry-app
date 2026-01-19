import { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalvideos = 3;
  const nextVedioRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcamingVideoIndex = (currentIndex % totalvideos) + 1;

  const handleMinVdClick = () => {
    setHasClicked(true);

    setCurrentIndex(upcamingVideoIndex);
  };

  const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden bg-blue-75"
      >
        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={handleMinVdClick}
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              src={getVideoSrc(upcamingVideoIndex)}
              ref={nextVedioRef}
              loop
              muted
              id="current-video"
              className="size-64 origin-center scale-150 object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
          </div>
        </div>
        <video
          src={getVideoSrc(currentIndex)}
          ref={nextVedioRef}
          loop
          muted
          id="next-video"
          className="absolute-center invisible absolute z-20 size-64 object-center"
          onLoadedData={handleVideoLoad}
        />

        <video
          src={getVideoSrc(currentIndex === totalvideos - 1 ? 1 : currentIndex)}
          autoPlay
          loop
          muted
          id="next-video"
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />
      </div>
    </div>
  );
};

export default Hero;
