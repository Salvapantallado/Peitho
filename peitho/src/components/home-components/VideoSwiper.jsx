import { useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import { useSwipeable } from "react-swipeable";

export default function VideoSwiper({ allStories }) {
  let [currentIndex, setCurrentIndex] = useState(0);
  const addingPrToSt = allStories.map((vid, index) => {
    return {
      ...vid,
      dataStatus: index === currentIndex ? "active" : "inactive",
    };
  });

  function handleNextSlide() {
    currentIndex + 1 <= addingPrToSt.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0);
  }

  function handlePreviousSlide() {
    currentIndex - 1 >= 0
      ? setCurrentIndex(currentIndex - 1)
      : setCurrentIndex(0);
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

  function ClassCheck(index) {
    if (currentIndex > index + 1 || currentIndex < index - 1) {
      return "videodiv inactiveNumber";
    } else if (index === currentIndex) {
      return "videodiv";
    } else if (index < currentIndex) {
      return "videodiv inactiveLeft";
    } else if (index > currentIndex) {
      return "videodiv inactiveRight";
    }
  }

  return (
    <div className="style-container">
      <div className="section-title">
        <h2>Ultimas historias</h2>
      </div>
      <div className="videoWrapper" {...handlers}>
        {addingPrToSt.length !== 0
          ? addingPrToSt?.map((singleStory, index) => (
              <div className={ClassCheck(index)} key={index}>
                {singleStory.type === "video" ? (
                  <video
                    muted
                    loop
                    autoPlay
                    onClick={() => checkOnClick(index)}
                  >
                    <source src={singleStory.url} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={singleStory.url}
                    alt="Story preview"
                    onClick={() => checkOnClick(index)}
                  />
                )}
              </div>
            ))
          : null}
      </div>
      <div className="storyButtons">
        <button onClick={() => handlePreviousSlide()}>
          <KeyboardDoubleArrowLeftIcon />
        </button>
        <button onClick={() => handleNextSlide()}>
          <KeyboardDoubleArrowRightIcon />
        </button>
      </div>
    </div>
  );
}
