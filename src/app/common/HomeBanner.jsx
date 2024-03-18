import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { BannerData } from "mock/Home";
import { Link } from "react-router-dom";

import video from "assets/banner_video.mp4";
import ReactPlayer from "react-player";

export const HomeBanner = () => {
  const swiperRef = useRef();
  const playerRef = useRef();
  const [swiper, setSwiper] = useState(null);
  const [autoplayDelay, setAutoplayDelay] = useState(21000);

  const handleVideoProgress = (state) => {
    if (state.playedSeconds + 1 >= state.loadedSeconds) {
      swiper && swiper.slideNext();
    }
  };

  useEffect(() => {
    const handleSlideChange = () => {
      const currentSlide = swiperRef.current.swiper.realIndex;
      const isVideoSlide = BannerData[currentSlide]?.video;

      if (isVideoSlide) {
        playerRef.current.seekTo(0, "seconds");
        setAutoplayDelay(22000);
      } else {
        setAutoplayDelay(3000);
      }
    };

    swiper && swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper && swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <Swiper
      ref={swiperRef}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="banner_swiper"
      effect="fade"
      speed={4000}
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
      }}
      onSwiper={(s) => setSwiper(s)}
    >
      {BannerData?.map((banner) => {
        const isVideoSlide = banner.video;

        return (
          <SwiperSlide key={banner?.id}>
            <div className="banner_layout">
              {isVideoSlide ? (
                <ReactPlayer
                  ref={playerRef}
                  url={video}
                  loop={true}
                  playing={true}
                  width={"100%"}
                  height={"100%"}
                  muted={true}
                  onProgress={handleVideoProgress}
                />
              ) : (
                <img src={banner?.bgImg} alt="banners" />
              )}
              <div className="banner_content">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  dangerouslySetInnerHTML={{ __html: banner?.heading }}
                />
                <Link
                  to={banner?.slug}
                  className="banner_btn"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay="800"
                  data-aos-duration="1200"
                >
                  {banner?.linkTxt}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

// import React, { useState, useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// import { BannerData } from "mock/Home";
// import { Link } from "react-router-dom";

// // import video from "assets/banner_video.mp4";
// // import ReactPlayer from "react-player";

// export const HomeBanner = () => {
//   const swiperRef = useRef();
//   const playerRef = useRef();
//   const [swiper, setSwiper] = useState(null);
//   const [autoplayDelay, setAutoplayDelay] = useState(22000);
//   const [initialVideo, setInitialVideo] = useState(
//     "https://www.youtube.com/embed/rDOI5eZ0MOU?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&playlist=rDOI5eZ0MOU"
//   );

//   useEffect(() => {
//     const handleSlideChange = () => {
//       const currentSlide = swiperRef.current.swiper.realIndex;
//       const isVideoSlide = BannerData[currentSlide]?.video;

//       if (isVideoSlide) {
//         setAutoplayDelay(22000);
//         setInitialVideo(initialVideo.concat("", "&amp;start=0"));
//       } else {
//         setAutoplayDelay(3000);
//       }
//     };

//     swiper && swiper.on("slideChange", handleSlideChange);

//     return () => {
//       swiper && swiper.off("slideChange", handleSlideChange);
//     };
//   }, [swiper, playerRef]);

//   return (
//     <Swiper
//       ref={swiperRef}
//       loop={true}
//       pagination={{
//         clickable: true,
//       }}
//       modules={[Pagination, Autoplay]}
//       className="banner_swiper"
//       effect="fade"
//       speed={4000}
//       autoplay={{
//         delay: autoplayDelay,
//         disableOnInteraction: false,
//       }}
//       onSwiper={(s) => setSwiper(s)}
//     >
//       {BannerData?.map((banner) => {
//         const isVideoSlide = banner.video;

//         return (
//           <SwiperSlide key={banner?.id}>
//             <div className="banner_layout">
//               {isVideoSlide ? (
//                 <iframe ref={playerRef} src={initialVideo}></iframe>
//               ) : (
//                 <img src={banner?.bgImg} alt="banners" />
//               )}
//               <div className="banner_content">
// <h1
//   data-aos="fade-up"
//   data-aos-delay="500"
//   data-aos-duration="1000"
//   dangerouslySetInnerHTML={{ __html: banner?.heading }}
// />
//                 <Link
//                   to={banner?.slug}
//                   className="banner_btn"
//                   data-aos="fade-up"
//                   data-aos-anchor-placement="top-bottom"
//                   data-aos-delay="800"
//                   data-aos-duration="1200"
//                 >
//                   {banner?.linkTxt}
//                 </Link>
//               </div>
//             </div>
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// };
