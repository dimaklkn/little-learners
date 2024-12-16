import React, { useState, useEffect } from "react";
// import components
import FeedbackCard from "./FeedbackCard";
// import images
import arrowLeft from "../images/arrow-left.png";
import arrowRight from "../images/arrow-right-1.png";

//data for feedback carousel
import data from "../data";

const Testimonials = () => {
  //carousel functionality
  let [width, setWidth] = useState(window.innerWidth);
  let mover = width > 1040 ? 3 : 1;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToRight = () => {
    let newIndex = currentIndex + mover;

    setCurrentIndex(newIndex);
  };
  const goToLeft = () => {
    let newIndex = currentIndex - mover;
    if (newIndex < 0) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <section className="testimonials wrapper">
      <div className="testimonials__title">
        <button>Their Happy Words</button>
        <h2>Our Testimonials</h2>
        <p>
          Our testimonials are heartfelt reflections of the nurturing
          environment we provide, where children flourish both academically and
          emotionally.
        </p>
      </div>
      <div className="carousel">
        {data.map((person, index) => {
          if (index >= currentIndex && index < currentIndex + mover) {
            return (
              <FeedbackCard
                key={person.name}
                profileImage={person.profileImage}
                name={person.name}
                text={person.feedback}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <nav>
        <button onClick={goToLeft} disabled={currentIndex === 0}>
          <img src={arrowLeft} alt="arrow left" />
        </button>
        <button
          disabled={currentIndex >= data.length - mover}
          onClick={goToRight}
        >
          <img src={arrowRight} alt="arrow right" />
        </button>
      </nav>
    </section>
  );
};

export default Testimonials;
