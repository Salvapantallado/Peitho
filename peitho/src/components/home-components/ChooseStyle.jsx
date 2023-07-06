// import SanValentin from "/ProductImages/Vestido-SanValentin.jpeg"

import { useEffect, useRef, useState } from "react";

import OneStory from "../../images/Videos/storyTest.mp4";
import slide1 from "../../images/Videos/slide1.mp4";
import slide2 from "../../images/Videos/slide2.mp4";
import slide3 from "../../images/Videos/slide3.mp4";

import { useSwipeable } from "react-swipeable";
import { useInView } from "react-intersection-observer";

export default function ChooseYourStyle() {
  let [currentIndex, setCurrentIndex] = useState(0);
  let [indexFromMap, setIndexFromMap] = useState(0);
  const videoStories = [
    { url: OneStory },
    { url: slide1 },
    { url: slide2 },
    { url: slide3 },
  ];

  const addingPrToSt = videoStories.map((vid, index) => {
    return {
      ...vid,
      id: index,
      dataStatus: index === currentIndex ? "active" : "inactive",
    };
  });
  // const videoRef = useRef(null);
  // const { ref, inView, entry } = useInView({
  //   threshold: 0,
  // });

  // useEffect(() => {
  //   if (inView) {
  //     videoRef.current.pause();
  //     console.log(videoRef.current);
  //   } else {
  //     if (videoRef.current.play) {
  //       // videoRef.current.reset();
  //       videoRef.current.pause();
  //     }
  //   }
  // });

  function handleNextSlide() {
    currentIndex + 1 <= addingPrToSt.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0);
    //  console.log(addingPrToSt.map((x) => x.dataStatus), "datastatus");
  }

  function handlePreviousSlide() {
    currentIndex - 1 >= 0
      ? setCurrentIndex(currentIndex - 1)
      : setCurrentIndex(0);
    // console.log(addingPrToSt.map(/(x) => x.dataStatus), "datastatus");
  }

  // Changing current index on video click
  function checkOnClick(index) {
    if (index === currentIndex) {
      return null;
    }
    if (index < currentIndex) {
      currentIndex - 1 >= 0
        ? setCurrentIndex(currentIndex - 1)
        : setCurrentIndex(addingPrToSt.length - 1);
    }
    if (index > currentIndex) {
      currentIndex + 1 <= addingPrToSt.length - 1
        ? setCurrentIndex(currentIndex + 1)
        : setCurrentIndex(0);
    }
  }

  // Swipe method
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      currentIndex + 1 <= addingPrToSt.length - 1
        ? setCurrentIndex(currentIndex + 1)
        : setCurrentIndex(0),
    onSwipedRight: () =>
      currentIndex - 1 >= 0
        ? setCurrentIndex(currentIndex - 1)
        : setCurrentIndex(0),
  });

  console.log(addingPrToSt);

  function ClassCheck(index) {
    if (currentIndex > index + 1 || currentIndex < index - 1){
      return "videodiv inactiveNumber"
    } else if (index === currentIndex) {
      return "videodiv";
    } else if (index < currentIndex) {
      return "videodiv inactiveLeft"
    } else if (index > currentIndex) {
      return "videodiv inactiveRight"
  }
}

  return (
    <div className="style-container">
      <div className="section-title">
        {/* <video autoPlay muted loop data-index="0" data-status="active">
          <source src={OneStory} type="video/mp4" />
        </video>
          <video autoPlay muted loop data-index="1" data-status="inactive">
          <source src={OneStory} type="video/mp4" />
        </video>
        <video autoPlay muted loop data-index="2" data-status="inactive">
          <source src={OneStory} type="video/mp4" />
        </video>
        <video autoPlay muted loop data-index="3" data-status="inactive">
          <source src={OneStory} type="video/mp4" />
        </video> */}
        <h2>Ultimas historias</h2>
      </div>
      <div className="videoWrapper" {...handlers}>
        {addingPrToSt.length !== 0
          ? addingPrToSt?.map((singleStory, index) => (
              <div
                className={ClassCheck(index)}
                key={index}
                // ref={ref}
              >
                <video
                  muted
                  loop
                  autoPlay
                  // ref={videoRef}
                  // videoindex={index}
                  onClick={() => checkOnClick(index)}
                >
                  <source src={singleStory.url} type="video/mp4" />
                </video>
              </div>
            ))
          : null}
      </div>
      <button onClick={() => handlePreviousSlide()}>←</button>
      <button onClick={() => handleNextSlide()}>→</button>
    </div>
  );
}
