const sliderContainer = document.querySelector("[data-slider-container]");
const slideLeft = document.querySelector("[data-slide='left']");
const slideRight = document.querySelector("[data-slide='right']");
const upButton = document.querySelector("[data-button='up']");
const downButton = document.querySelector("[data-button='down']");
const slideLength = slideRight.querySelectorAll(
  "[data-slide-item='right']"
).length;

let activeSlideIndex = 0;
slideLeft.style.top = `-${(slideLength - 1) * 100}vh`;

upButton.addEventListener(`click`, () => changeSlide(`up`));
downButton.addEventListener(`click`, () => changeSlide(`down`));

const changeSlide = (direction) => {
  console.log(`direction: `, direction);
  console.log(`activeSlideIndex`, activeSlideIndex);
  const sliderHeight = sliderContainer.clientHeight;

  console.log(`sliderHeight: `, sliderHeight);

  switch (direction) {
    case `up`:
      console.log(`Go up`);
      activeSlideIndex++;
      if (activeSlideIndex > slideLength - 1) {
        activeSlideIndex = 0;
      }
      break;

    case `down`:
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
        activeSlideIndex = slideLength - 1;
      }
      break;
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
