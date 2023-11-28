import { useState } from "react";

const Carousel = (props) => {
  const slides = props.slides;
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
  };

  return (
    <div className="carousel">
      {length > 1 && (
        <button onClick={prevSlide} className="prev">
          <i className="bi bi-chevron-compact-left"></i>
        </button>
      )}
      {length > 1 && (
        <button onClick={nextSlide} className="next">
          <i className="bi bi-chevron-compact-right"></i>
        </button>
      )}
      {length > 1 && (
        <div className="picIndic">{`${current + 1}/${length}`}</div>
      )}
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img src={slide} alt="appartement à louer"></img>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
